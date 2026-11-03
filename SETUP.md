# 元气食谱小屋：云端同步管理员版部署说明

## 功能
- 访客可公开浏览食谱、采购清单和打卡日历。
- 管理员使用自定义用户名 + 密码登录后，才可编辑食谱、采购清单和打卡。
- 食谱、采购清单、打卡记录统一保存在 Supabase 的 `app_data` 单行 JSON 数据中。
- 打卡即时保存；食谱和采购清单编辑后点击页面上的“保存全部修改”。
- 使用 Supabase Realtime 将其他设备的数据更新推送到已打开的页面。
- 浏览器 localStorage 只作为离线浏览缓存，不再作为跨设备数据源。

## 第 1 步：创建 Supabase 项目
1. 打开 https://supabase.com/dashboard ，登录并创建一个新项目。
2. 记录项目数据库密码（仅你自己保管）。
3. 等待项目创建完成。
4. 进入 Project Settings -> API Keys，复制 Project URL 和 Publishable key（或旧项目的 anon public key）。
   **不要复制或公开 Secret key / service_role key。**

## 第 2 步：创建数据库和安全策略
1. 打开 Supabase 项目的 SQL Editor。
2. 点击 New query。
3. 打开本压缩包里的 `supabase_setup.sql`，复制全部内容并执行。
4. 执行成功后，Table Editor 中应出现 `admins` 和 `app_data` 两张表。

## 第 3 步：创建唯一管理员账号
1. 在 Supabase Dashboard 打开 Authentication -> Users。
2. 点击 Add user，选择创建用户（Create new user）。
3. 填入你自己的常用邮箱和一个强密码，并确认邮箱已验证/用户可登录。
4. 创建后复制该用户的 User UID。
5. 回到 SQL Editor，执行下面语句，把 UUID 替换成刚才复制的 UID：

```sql
insert into public.admins (user_id)
values ('把管理员用户的 User UID 粘贴到这里');
```

此时只有这条记录对应的 Supabase 用户拥有管理员写权限。不要在网页端开放注册，也不要把其他用户加入 admins 表。

## 第 4 步：配置网站前端
打开 `script.js` 文件最顶部的“Supabase 云端配置”区域，替换以下四项：

```js
const SUPABASE_URL = "https://你的项目ID.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_你的公开key";
const ADMIN_USERNAME = "你想使用的用户名";
const ADMIN_AUTH_EMAIL = "第 3 步创建管理员时使用的邮箱";
```

说明：Supabase Auth 原生密码登录使用邮箱/手机号。这里给你做了自定义用户名登录外观：你输入自己设定的用户名，前端映射到专属管理员邮箱，再由 Supabase Auth 验证密码。用户名不是密码，也不能代替数据库 RLS 权限。

**Publishable key 可以放在浏览器端；Secret/service_role key 绝不能放进 HTML、JS、GitHub Pages 或公开仓库。**

## 第 5 步：上传到 GitHub Pages
1. 将压缩包里的 `index.html`、`styles.css`、`script.js`、`supabase_setup.sql`、`SETUP.md` 放入 GitHub 仓库网站根目录（至少前三个文件必须替换）。
2. 保留你原有的 `assets` 图片文件夹，不要删除 `assets/stitch.png`、`assets/dimoo.png` 等图片。
3. Commit changes / 推送到 GitHub。
4. 等 GitHub Pages 部署完成后，打开你原来的网站地址。
5. 访客应能直接浏览；点击“管理员登录”，输入刚设置的用户名和 Supabase 用户密码即可进入管理模式。

## 第 6 步：首次初始化云端数据
- 如果 `app_data` 目前还是空对象 `{}`，网页会先显示原来的七天初始食谱和原采购清单。
- 使用管理员账号登录后，点击“保存全部修改”一次，将现有食谱、采购清单和当前打卡记录写入云端。
- 之后手机和电脑打开同一个 GitHub Pages 地址，都会从 Supabase 读取同一份数据。
- 每日打卡在点击时自动保存；食谱与采购清单编辑后仍需点击“保存全部修改”。

## 重要注意事项
- 不要把 Supabase Secret key / service_role key 放到前端。
- 不要把 `admins` 表的写权限授予 anon/authenticated；管理员授权请只通过 Supabase Dashboard/SQL Editor 操作。
- 所有人可读意味着任何访客都能看到你的食谱、采购清单和打卡状态；不要在这些内容里存放隐私信息。
- Realtime 是即时推送体验；如果网络或浏览器阻止 WebSocket，重新打开页面仍会从数据库读取最新数据。
- 当前网站仍是静态 GitHub Pages；修改 HTML/CSS/JS 代码仍需提交 GitHub 才会发布。日常修改食谱、采购清单、打卡不需要重新部署代码。
- 若两台设备同时编辑同一内容，后保存的一方会覆盖整份 JSON 数据。建议避免同时编辑；之后可升级为按模块/记录拆分的数据库结构。
