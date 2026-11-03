-- 元气食谱小屋：Supabase 数据表与权限策略
-- 在 Supabase Dashboard -> SQL Editor -> New query 中整段执行。

create table if not exists public.admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

create table if not exists public.app_data (
  id integer primary key check (id = 1),
  payload jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

insert into public.app_data (id, payload)
values (1, '{}'::jsonb)
on conflict (id) do nothing;

alter table public.admins enable row level security;
alter table public.app_data enable row level security;

-- 未登录访客和已登录用户都可以读取网站内容。
drop policy if exists "Public can read app data" on public.app_data;
create policy "Public can read app data"
on public.app_data for select
to anon, authenticated
using (true);

-- 只有 admins 表中登记的管理员可以新增或修改整份网站数据。
drop policy if exists "Admins can insert app data" on public.app_data;
create policy "Admins can insert app data"
on public.app_data for insert
to authenticated
with check (
  exists (select 1 from public.admins where admins.user_id = (select auth.uid()))
);

drop policy if exists "Admins can update app data" on public.app_data;
create policy "Admins can update app data"
on public.app_data for update
to authenticated
using (
  exists (select 1 from public.admins where admins.user_id = (select auth.uid()))
)
with check (
  exists (select 1 from public.admins where admins.user_id = (select auth.uid()))
);

-- 管理员只能读取自己的授权记录；不能从网页自行给自己增加管理员权限。
drop policy if exists "Admins can read own admin record" on public.admins;
create policy "Admins can read own admin record"
on public.admins for select
to authenticated
using (user_id = (select auth.uid()));

-- 只给浏览器客户端需要的权限；RLS 仍会逐行检查。
grant select on public.app_data to anon, authenticated;
grant insert, update on public.app_data to authenticated;
grant select on public.admins to authenticated;

-- 开启 app_data 的 Realtime 变更推送（如已加入 publication，请忽略重复添加提示）。
do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'app_data'
  ) then
    alter publication supabase_realtime add table public.app_data;
  end if;
end $$;
