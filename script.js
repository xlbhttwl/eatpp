// 初始数据
const initialData = {
  shoppingList: [
    { name: "鸡蛋", amount: "14～16个" },
    { name: "鸡胸肉", amount: "300克" },
    { name: "去皮鸡腿肉", amount: "160克" },
    { name: "牛肉", amount: "260克" },
    { name: "瘦猪肉", amount: "390克" },
    { name: "虾仁", amount: "420克" },
    { name: "豆腐", amount: "550克" },
    { name: "牛奶", amount: "1.75升" },
    { name: "燕麦", amount: "120克" },
    { name: "全麦面包", amount: "140克" },
    { name: "大米", amount: "约400克（生米）" },
    { name: "红薯/紫薯/南瓜/玉米", amount: "按菜单采购" },
    { name: "西兰花/青菜/番茄等", amount: "按菜单采购" },
    { name: "香蕉/苹果", amount: "各适量" }
  ],
  days: [
    {
      id: 1,
      name: "第1天",
      meals: [
        { type: "早餐", name: "香蕉牛奶燕麦＋水煮蛋", ingredients: ["燕麦40克", "纯牛奶250毫升", "香蕉80克", "鸡蛋2个"], steps: ["鸡蛋放入锅中，加水煮8～10分钟。", "燕麦放入小锅，加入牛奶。", "小火煮3～5分钟，期间搅拌。", "香蕉切片放入燕麦中。", "搭配水煮蛋食用。"] },
        { type: "午餐", name: "黑椒鸡胸肉＋蒜蓉西兰花＋米饭", ingredients: ["鸡胸肉150克", "西兰花200克", "熟米饭150克", "食用油8克", "生抽5毫升", "黑胡椒、蒜末、盐少许"], steps: ["鸡胸肉切薄片。", "加生抽、黑胡椒腌制10分钟。", "锅中放4克油，倒入鸡肉炒熟。", "西兰花切小朵，放入沸水焯2分钟。", "锅中放剩余4克油和蒜末，倒入西兰花翻炒。", "加少许盐，搭配米饭。"] },
        { type: "晚餐", name: "虾仁豆腐汤＋蒸红薯", ingredients: ["虾仁150克", "豆腐150克", "青菜200克", "红薯180克", "食用油8克", "姜片、盐少许"], steps: ["红薯洗净切块，放入电饭煲蒸熟。", "锅中加水，放入姜片烧开。", "加入虾仁，煮至变色。", "加入豆腐块，继续煮3分钟。", "放入青菜，煮熟后加盐调味。", "最后加入少量食用油即可。"] }
      ]
    },
    {
      id: 2,
      name: "第2天",
      meals: [
        { type: "早餐", name: "全麦鸡蛋三明治＋牛奶", ingredients: ["全麦面包70克", "鸡蛋2个", "牛奶250毫升"], steps: ["鸡蛋煮熟，剥壳切片。", "全麦面包放入平底锅，两面稍微加热。", "将鸡蛋夹入面包。", "可以加少许黑胡椒，不需要额外放沙拉酱。", "配牛奶食用。"] },
        { type: "午餐", name: "青椒牛肉丝＋胡萝卜＋米饭", ingredients: ["牛肉140克", "青椒150克", "胡萝卜100克", "熟米饭150克", "食用油8克", "生抽5毫升、黑胡椒少许"], steps: ["牛肉切丝，加入生抽和黑胡椒腌10分钟。", "青椒、胡萝卜切丝。", "锅中放油，先倒入牛肉炒至熟透。", "加入胡萝卜翻炒2分钟。", "加入青椒继续炒熟。", "加少许盐，搭配米饭。"] },
        { type: "晚餐", name: "虾仁蒸蛋＋玉米＋凉拌黄瓜", ingredients: ["虾仁120克", "鸡蛋1个", "玉米150克", "黄瓜200克", "豆腐150克", "食用油8克"], steps: ["鸡蛋打散，加入约1.5倍重量的温水，搅拌均匀。", "放入虾仁，盖上盘子。", "水开后蒸约10～12分钟，确认蛋液凝固、虾仁熟透。", "玉米放电饭煲蒸熟。", "黄瓜拍碎，加入少许生抽、醋和盐拌匀。", "豆腐切片，用食用油煎至两面微黄。"] }
      ]
    },
    {
      id: 3,
      name: "第3天",
      meals: [
        { type: "早餐", name: "苹果燕麦牛奶＋水煮蛋", ingredients: ["燕麦40克", "牛奶250毫升", "苹果100克", "鸡蛋2个"], steps: ["燕麦加入牛奶，小火煮3～5分钟。", "苹果切成小块。", "将苹果放在燕麦上。", "鸡蛋煮熟，搭配食用。"] },
        { type: "午餐", name: "鸡丝荞麦面", ingredients: ["干荞麦面70克", "鸡胸肉150克", "青菜200克", "食用油8克", "生抽、醋、蒜末少许"], steps: ["鸡胸肉放入锅中，加姜片和清水煮熟。", "捞出放凉，撕成鸡丝。", "荞麦面按照包装说明煮熟。", "青菜放入沸水中焯熟。", "将面条、鸡丝、青菜放入碗中。", "加入生抽、醋、蒜末和食用油拌匀。"] },
        { type: "晚餐", name: "肉末豆腐＋蒸紫薯＋西兰花", ingredients: ["瘦猪肉120克", "豆腐150克", "紫薯180克", "西兰花200克", "食用油8克", "生抽、盐少许"], steps: ["紫薯切块，放入电饭煲蒸熟。", "瘦猪肉剁成肉末。", "锅中放油，加入肉末炒至熟透。", "加入豆腐块，轻轻翻炒。", "加入少许生抽和清水，焖3分钟。", "西兰花焯熟，搭配食用。"] }
      ]
    },
    {
      id: 4,
      name: "第4天",
      meals: [
        { type: "早餐", name: "红薯＋鸡蛋＋牛奶", ingredients: ["红薯180克", "鸡蛋2个", "牛奶250毫升"], steps: ["红薯切块，放入电饭煲蒸熟。", "鸡蛋煮熟。", "搭配牛奶食用。"] },
        { type: "午餐", name: "空气炸锅黑椒鸡腿饭", ingredients: ["去皮鸡腿肉160克", "西兰花200克", "熟米饭150克", "食用油8克", "生抽、黑胡椒、蒜末少许"], steps: ["鸡腿肉去皮，切成小块。", "加生抽、黑胡椒和蒜末腌制15分钟。", "放入空气炸锅，180℃烤15～20分钟，中途翻面。", "确认鸡肉内部完全熟透。", "西兰花焯水后，用食用油和蒜末翻炒。", "配米饭食用。"] },
        { type: "晚餐", name: "番茄牛肉豆腐汤", ingredients: ["牛肉120克", "番茄200克", "豆腐100克", "熟米饭100克", "青菜150克", "食用油8克"], steps: ["牛肉切薄片，番茄切块。", "锅中放油，倒入番茄炒软。", "加入清水，煮开。", "放入牛肉片，煮至完全熟透。", "加入豆腐块和青菜。", "加少许盐调味，搭配米饭。"] }
      ]
    },
    {
      id: 5,
      name: "第5天",
      meals: [
        { type: "早餐", name: "香蕉燕麦牛奶＋鸡蛋", ingredients: ["燕麦40克", "牛奶250毫升", "香蕉80克", "鸡蛋2个"], steps: ["燕麦加入牛奶，小火煮3～5分钟。", "香蕉切片。", "放入燕麦中。", "鸡蛋煮熟，搭配食用。"] },
        { type: "午餐", name: "虾仁西葫芦炒蛋＋米饭", ingredients: ["虾仁160克", "鸡蛋1个", "西葫芦200克", "熟米饭150克", "食用油8克", "盐、黑胡椒少许"], steps: ["西葫芦切片，虾仁擦干水分。", "鸡蛋打散。", "锅中放少量油，先将鸡蛋炒熟，盛出。", "锅中加入剩余油，放入虾仁炒熟。", "加入西葫芦翻炒至变软。", "倒入鸡蛋，加少许盐调味。"] },
        { type: "晚餐", name: "瘦肉豆腐炒南瓜＋青菜", ingredients: ["瘦猪肉130克", "豆腐150克", "南瓜200克", "青菜200克", "食用油8克"], steps: ["南瓜切成薄片，放入电饭煲蒸熟。", "瘦猪肉切片。", "锅中放油，加入猪肉炒熟。", "放入豆腐块，轻轻翻炒。", "加入南瓜，少许生抽和盐调味。", "青菜焯熟或清炒，搭配食用。"] }
      ]
    },
    {
      id: 6,
      name: "第6天",
      meals: [
        { type: "早餐", name: "鸡蛋全麦吐司＋牛奶", ingredients: ["全麦面包70克", "鸡蛋2个", "牛奶250毫升"], steps: ["鸡蛋煮熟，剥壳。", "面包放入平底锅稍微烘热。", "鸡蛋切片，夹入面包。", "搭配牛奶食用。"] },
        { type: "午餐", name: "香菇鸡肉饭", ingredients: ["鸡胸肉150克", "香菇100克", "青菜150克", "熟米饭150克", "食用油8克", "生抽,盐少许"], steps: ["鸡胸肉切块，香菇切片。", "锅中放油，倒入鸡肉炒至变色。", "加入香菇翻炒。", "加入少许生抽和清水。", "盖上锅盖焖3～5分钟，确保鸡肉熟透。", "青菜焯熟，配米饭。"] },
        { type: "晚餐", name: "牛肉豆腐煎饼＋玉米黄瓜", ingredients: ["牛肉120克", "豆腐150克", "玉米150克", "黄瓜200克", "食用油8克"], steps: ["牛肉剁碎，豆腐压碎。", "将牛肉和豆腐混合，加盐和黑胡椒。", "捏成小肉饼。", "平底锅放油，将肉饼两面煎至金黄。", "加少许水，盖锅焖至内部完全熟透。", "玉米蒸熟，黄瓜切片加醋凉拌。"] }
      ]
    },
    {
      id: 7,
      name: "第7天",
      meals: [
        { type: "早餐", name: "苹果牛奶燕麦＋鸡蛋", ingredients: ["燕麦40克", "牛奶250毫升", "苹果100克", "鸡蛋2个"], steps: ["燕麦加牛奶煮3～5分钟。", "苹果切小块放入燕麦。", "鸡蛋煮熟，搭配食用。"] },
        { type: "午餐", name: "青椒肉丝盖饭", ingredients: ["瘦猪肉140克", "青椒150克", "包菜200克", "熟米饭150克", "食用油8克"], steps: ["猪肉切丝，加生抽腌10分钟。", "青椒切丝，包菜切块。", "锅中放油，先炒肉丝至熟透。", "加入青椒翻炒。", "包菜另外清炒或焯熟。", "配米饭食用。"] },
        { type: "晚餐", name: "蒜蓉虾仁＋煎豆腐＋烤红薯", ingredients: ["虾仁150克", "豆腐150克", "红薯180克", "西兰花200克", "食用油8克"], steps: ["红薯切块，空气炸锅180℃烤15～20分钟，直到熟透。", "虾仁加入蒜末、黑胡椒和少许盐。", "空气炸锅180℃烤6～8分钟，确保虾仁熟透。", "豆腐切片，用食用油煎至两面微黄。", "西兰花焯水，搭配食用。"] }
      ]
    }
  ]
};

// ===== Supabase 云端配置 =====
// 这两个值来自 Supabase 项目设置 -> API。浏览器只能使用 publishable/anon key，绝不能放 service_role/secret key。
const SUPABASE_URL = "https://rppildstakwmuxxxxugr.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_hQ5JTeHhyz1aPQGiGWD4Sg_o9MOCNca";

// 自定义登录用户名（可改成你自己的用户名）；邮箱是创建 Supabase Auth 用户时使用的邮箱。
// 用户在网页输入用户名 + 密码，程序会把用户名映射到这个邮箱，再由 Supabase 验证密码。
const ADMIN_USERNAME = "admin";
const ADMIN_AUTH_EMAIL = "xlbhttwl@gmail.com";

const supabaseClient = (window.supabase && SUPABASE_URL.startsWith("https://") && !SUPABASE_URL.includes("YOUR_") && SUPABASE_PUBLISHABLE_KEY && !SUPABASE_PUBLISHABLE_KEY.includes("YOUR_"))
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
      auth: { autoRefreshToken: true, persistSession: true, detectSessionInUrl: true }
    })
  : null;

let isEditor = false;
let currentUser = null;
let appData = JSON.parse(localStorage.getItem("diet_data") || "null") || JSON.parse(JSON.stringify(initialData));
let checkinData = JSON.parse(localStorage.getItem("diet_checkins") || "{}");
let currentDayId = appData.days.length > 0 ? appData.days[0].id : 1;
let checkinMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
let cloudChannel = null;
let lastCloudUpdatedAt = null;
let isApplyingRemote = false;

function setCloudStatus(message, state = "normal") {
  const el = document.getElementById("cloud-status");
  if (!el) return;
  el.textContent = message;
  el.dataset.state = state;
}

function renderAll() {
  renderShoppingList();
  renderTabs();
  renderDayContent(currentDayId);
  renderCheckinCalendar();
}

function setEditorMode(enabled, user = null) {
  isEditor = enabled;
  currentUser = user;
  document.body.classList.toggle("is-editor", enabled);
  const badge = document.getElementById("role-badge");
  const authBtn = document.getElementById("auth-btn");
  badge.textContent = enabled ? "✏️ 管理员模式" : "👀 浏览模式";
  badge.className = enabled ? "badge badge-editor" : "badge badge-viewer";
  authBtn.textContent = enabled ? "退出管理员" : "管理员登录";
  const tip = document.querySelector(".checkin-tip");
  if (tip) tip.textContent = enabled
    ? "♡ 点击日期即可切换「已完成 / 未完成」，打卡会自动同步到云端。"
    : "♡ 当前为浏览模式；管理员登录后即可进行每日打卡。";
  renderAll();
}

function openLoginModal() {
  const modal = document.getElementById("login-modal");
  document.getElementById("login-error").textContent = "";
  modal.hidden = false;
  setTimeout(() => document.getElementById("admin-username").focus(), 0);
}
function closeLoginModal() {
  document.getElementById("login-modal").hidden = true;
}

async function toggleAuth() {
  if (isEditor) {
    if (supabaseClient) await supabaseClient.auth.signOut();
    setEditorMode(false);
    setCloudStatus("☁️ 云端已连接");
    return;
  }
  if (!supabaseClient) {
    alert("还没有配置 Supabase。请先按 SETUP.md 完成云端配置，再登录管理员账户。");
    return;
  }
  openLoginModal();
}

async function verifyAdminSession(session) {
  if (!session?.user) {
    setEditorMode(false);
    return false;
  }
  const { data, error } = await supabaseClient
    .from("admins").select("user_id").eq("user_id", session.user.id).maybeSingle();
  if (error || !data) {
    await supabaseClient.auth.signOut();
    setEditorMode(false);
    setCloudStatus("☁️ 云端已连接 · 浏览模式");
    return false;
  }
  setEditorMode(true, session.user);
  return true;
}

async function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById("admin-username").value.trim();
  const password = document.getElementById("admin-password").value;
  const errorEl = document.getElementById("login-error");
  const submit = document.getElementById("login-submit");
  errorEl.textContent = "";

  if (username.toLowerCase() !== ADMIN_USERNAME.toLowerCase()) {
    errorEl.textContent = "用户名或密码不正确。";
    return;
  }
  if (!ADMIN_AUTH_EMAIL || ADMIN_AUTH_EMAIL.includes("YOUR_")) {
    errorEl.textContent = "请先在 script.js 中填写管理员邮箱配置。";
    return;
  }

  submit.disabled = true;
  submit.textContent = "正在验证…";
  try {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email: ADMIN_AUTH_EMAIL,
      password
    });
    if (error) throw error;
    const { data: adminRow, error: adminError } = await supabaseClient
      .from("admins").select("user_id").eq("user_id", data.user.id).maybeSingle();
    if (adminError || !adminRow) {
      await supabaseClient.auth.signOut();
      throw new Error("此账号尚未获得管理员权限，请检查 Supabase 的 admins 表配置。");
    }
    closeLoginModal();
    document.getElementById("login-form").reset();
    setEditorMode(true, data.user);
    setCloudStatus("☁️ 管理员已登录");
    await loadCloudData();
  } catch (error) {
    errorEl.textContent = error.message.includes("Invalid login credentials")
      ? "用户名或密码不正确。" : error.message;
  } finally {
    submit.disabled = false;
    submit.textContent = "登录管理后台";
  }
}

function applyCloudPayload(payload, updatedAt) {
  if (!payload || typeof payload !== "object") return;
  if (Array.isArray(payload.shoppingList) && Array.isArray(payload.days)) {
    appData = { shoppingList: payload.shoppingList, days: payload.days };
    localStorage.setItem("diet_data", JSON.stringify(appData));
  }
  if (payload.checkins && typeof payload.checkins === "object") {
    checkinData = payload.checkins;
    localStorage.setItem("diet_checkins", JSON.stringify(checkinData));
  }
  lastCloudUpdatedAt = updatedAt || lastCloudUpdatedAt;
  currentDayId = appData.days.length ? appData.days[0].id : 1;
  renderAll();
}

async function loadCloudData() {
  if (!supabaseClient) {
    setCloudStatus("⚠️ 尚未配置云端");
    renderAll();
    return;
  }
  setCloudStatus("☁️ 正在读取云端数据…");
  try {
    const { data, error } = await supabaseClient
      .from("app_data").select("payload, updated_at").eq("id", 1).maybeSingle();
    if (error) throw error;
    if (data?.payload) applyCloudPayload(data.payload, data.updated_at);
    setCloudStatus("☁️ 云端同步正常");
  } catch (error) {
    console.error("读取云端数据失败：", error);
    setCloudStatus("⚠️ 云端读取失败");
    // 保留浏览器缓存，方便暂时离线查看；此时不允许把本地缓存自动覆盖云端。
  }
}

async function persistCloudData() {
  if (!supabaseClient || !isEditor) {
    alert("请先登录管理员账户，才能保存修改。");
    return false;
  }
  const payload = {
    shoppingList: appData.shoppingList,
    days: appData.days,
    checkins: checkinData
  };
  setCloudStatus("☁️ 正在保存…");
  try {
    const now = new Date().toISOString();
    const { error } = await supabaseClient.from("app_data").upsert({
      id: 1, payload, updated_at: now
    }, { onConflict: "id" });
    if (error) throw error;
    localStorage.setItem("diet_data", JSON.stringify({ shoppingList: appData.shoppingList, days: appData.days }));
    localStorage.setItem("diet_checkins", JSON.stringify(checkinData));
    lastCloudUpdatedAt = now;
    setCloudStatus("☁️ 已同步到云端");
    return true;
  } catch (error) {
    console.error("保存云端数据失败：", error);
    setCloudStatus("⚠️ 保存失败");
    alert("云端保存失败：" + error.message + "\n请检查网络、Supabase 配置和管理员权限。");
    return false;
  }
}

function subscribeCloudChanges() {
  if (!supabaseClient || cloudChannel) return;
  cloudChannel = supabaseClient.channel("public-app-data-sync")
    .on("postgres_changes", {
      event: "UPDATE", schema: "public", table: "app_data", filter: "id=eq.1"
    }, (event) => {
      const incomingAt = event.new?.updated_at;
      if (incomingAt && lastCloudUpdatedAt && incomingAt <= lastCloudUpdatedAt) return;
      if (isApplyingRemote) return;
      isApplyingRemote = true;
      applyCloudPayload(event.new?.payload, incomingAt);
      setCloudStatus("☁️ 已收到其他设备的更新");
      isApplyingRemote = false;
    })
    .subscribe((status) => {
      if (status === "SUBSCRIBED") setCloudStatus("☁️ 云端实时同步已连接");
      if (status === "CHANNEL_ERROR" || status === "TIMED_OUT") setCloudStatus("⚠️ 实时同步暂不可用");
    });
}

// ---- 页面初始化 ----
document.addEventListener("DOMContentLoaded", async () => {
  document.getElementById("login-form").addEventListener("submit", handleLogin);
  renderAll();
  if (!supabaseClient) {
    setCloudStatus("⚠️ 等待配置 Supabase");
    return;
  }
  setCloudStatus("☁️ 正在连接云端…");
  const { data: { session } } = await supabaseClient.auth.getSession();
  if (session) await verifyAdminSession(session);
  await loadCloudData();
  subscribeCloudChanges();
  supabaseClient.auth.onAuthStateChange(async (_event, sessionNow) => {
    if (!sessionNow) setEditorMode(false);
  });
});

// ---- 🛒 采购清单功能 ----
function renderShoppingList() {
  const container = document.getElementById("shopping-list");
  container.innerHTML = "";
  appData.shoppingList.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "item-box";
    div.innerHTML = `
      <span class="view-only"><strong>${escapeHtml(item.name)}:</strong> ${escapeHtml(item.amount)}</span>
      <input type="text" class="edit-only" value="${escapeAttr(item.name)}" placeholder="食材名称" onchange="appData.shoppingList[${index}].name = this.value">
      <input type="text" class="edit-only" value="${escapeAttr(item.amount)}" placeholder="数量" onchange="appData.shoppingList[${index}].amount = this.value">
      <button class="edit-only btn-danger" onclick="deleteShoppingItem(${index})">🗑️</button>
    `;
    container.appendChild(div);
  });
}
function addShoppingItem() { if (!isEditor) return; appData.shoppingList.push({ name: "新食材", amount: "适量" }); renderShoppingList(); }
function deleteShoppingItem(index) { if (!isEditor) return; appData.shoppingList.splice(index, 1); renderShoppingList(); }

// ---- 📅 动态天数功能 ----
function renderTabs() {
  const container = document.getElementById("day-tabs");
  container.innerHTML = "";
  if (!appData.days.length) return;
  if (!appData.days.some(d => d.id === currentDayId)) currentDayId = appData.days[0].id;
  appData.days.forEach(d => {
    const btn = document.createElement("button");
    btn.className = `tab-btn ${d.id === currentDayId ? "active" : ""}`;
    btn.innerText = d.name;
    btn.onclick = () => { currentDayId = d.id; renderTabs(); renderDayContent(currentDayId); };
    container.appendChild(btn);
  });
}

function renderDayContent(dayId) {
  const container = document.getElementById("day-content");
  const dayIndex = appData.days.findIndex(d => d.id === dayId);
  if (dayIndex === -1) { container.innerHTML = "<p>暂无食谱，请管理员登录后追加天数。</p>"; return; }
  const dayData = appData.days[dayIndex];
  let html = "";
  if (isEditor) {
    html += `<div class="day-header-edit">
      <label>🏷️ 天数名称：</label>
      <input type="text" value="${escapeAttr(dayData.name)}" onchange="appData.days[${dayIndex}].name = this.value; renderTabs();">
      <button class="btn-primary btn-sm" onclick="addMeal(${dayIndex})">➕ 添加一餐</button>
      <button class="btn-danger btn-sm" style="margin-left:auto;" onclick="deleteDay(${dayId})">🗑️ 删除整天食谱</button>
    </div>`;
  }
  dayData.meals.forEach((meal, mealIndex) => {
    html += `<div class="meal-block">
      <div class="view-only meal-title" style="font-size:1.1rem;color:var(--primary);font-weight:bold;margin-bottom:8px;">${escapeHtml(meal.type)}：${escapeHtml(meal.name)}</div>
      <div class="edit-only meal-title-row">
        <div style="display:flex;gap:8px;align-items:center;width:80%;">
          <input type="text" style="width:80px;" value="${escapeAttr(meal.type)}" onchange="appData.days[${dayIndex}].meals[${mealIndex}].type = this.value">
          <span>：</span><input type="text" style="flex:1;" value="${escapeAttr(meal.name)}" onchange="appData.days[${dayIndex}].meals[${mealIndex}].name = this.value">
        </div>
        <button class="btn-danger btn-sm" onclick="deleteMeal(${dayIndex}, ${mealIndex})">删除此餐</button>
      </div>
      <div class="section-title">🥗 食材：</div>
      <div class="view-only"><ul>${meal.ingredients.map(ing => `<li>${escapeHtml(ing)}</li>`).join("")}</ul></div>
      <div class="edit-only" style="margin:5px 0;">
        ${meal.ingredients.map((ing, ingIdx) => `<div class="editable-list-item"><input type="text" value="${escapeAttr(ing)}" onchange="appData.days[${dayIndex}].meals[${mealIndex}].ingredients[${ingIdx}] = this.value"><button class="btn-danger btn-sm" onclick="deleteIngredient(${dayIndex}, ${mealIndex}, ${ingIdx})">×</button></div>`).join("")}
        <button class="btn-primary btn-sm" style="margin-top:4px;" onclick="addIngredient(${dayIndex}, ${mealIndex})">+ 添加食材</button>
      </div>
      <div class="section-title">🍳 做法：</div>
      <div class="view-only"><ol>${meal.steps.map(step => `<li>${escapeHtml(step)}</li>`).join("")}</ol></div>
      <div class="edit-only" style="margin:5px 0;">
        ${meal.steps.map((step, stepIdx) => `<div class="editable-list-item"><input type="text" value="${escapeAttr(step)}" onchange="appData.days[${dayIndex}].meals[${mealIndex}].steps[${stepIdx}] = this.value"><button class="btn-danger btn-sm" onclick="deleteStep(${dayIndex}, ${mealIndex}, ${stepIdx})">×</button></div>`).join("")}
        <button class="btn-primary btn-sm" style="margin-top:4px;" onclick="addStep(${dayIndex}, ${mealIndex})">+ 添加步骤</button>
      </div>
    </div>`;
  });
  container.innerHTML = html;
}

function addDay() {
  if (!isEditor) return;
  const newId = Date.now();
  appData.days.push({ id: newId, name: `第${appData.days.length + 1}天`, meals: [{ type: "早餐", name: "自定义早餐", ingredients: ["燕麦40克"], steps: ["煮熟即可"] }] });
  currentDayId = newId; renderTabs(); renderDayContent(currentDayId);
}
function deleteDay(dayId) {
  if (!isEditor || !confirm("确定要删除这一整天的食谱吗？")) return;
  appData.days = appData.days.filter(d => d.id !== dayId);
  currentDayId = appData.days[0]?.id ?? 1; renderTabs(); renderDayContent(currentDayId);
}
function addMeal(dayIndex) { if (!isEditor) return; appData.days[dayIndex].meals.push({ type: "加餐", name: "新餐点", ingredients: ["食材"], steps: ["做法"] }); renderDayContent(currentDayId); }
function deleteMeal(dayIndex, mealIndex) { if (!isEditor) return; appData.days[dayIndex].meals.splice(mealIndex, 1); renderDayContent(currentDayId); }
function addIngredient(dayIndex, mealIndex) { if (!isEditor) return; appData.days[dayIndex].meals[mealIndex].ingredients.push("新食材"); renderDayContent(currentDayId); }
function deleteIngredient(dayIndex, mealIndex, ingIdx) { if (!isEditor) return; appData.days[dayIndex].meals[mealIndex].ingredients.splice(ingIdx, 1); renderDayContent(currentDayId); }
function addStep(dayIndex, mealIndex) { if (!isEditor) return; appData.days[dayIndex].meals[mealIndex].steps.push("新步骤"); renderDayContent(currentDayId); }
function deleteStep(dayIndex, mealIndex, stepIdx) { if (!isEditor) return; appData.days[dayIndex].meals[mealIndex].steps.splice(stepIdx, 1); renderDayContent(currentDayId); }

async function saveData() {
  if (!isEditor) { alert("请先登录管理员账户。"); return; }
  const ok = await persistCloudData();
  if (ok) alert("食谱、采购清单和打卡记录已保存到云端！其他设备打开网站即可同步。");
}

// ---- 🌷 每日打卡日历 ----
function dateKey(year, month, day) { return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`; }
function renderCheckinCalendar() {
  const calendar = document.getElementById("checkin-calendar");
  if (!calendar) return;
  const year = checkinMonth.getFullYear(), month = checkinMonth.getMonth();
  const offset = (new Date(year, month, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date(), todayKey = dateKey(today.getFullYear(), today.getMonth(), today.getDate());
  let completed = 0;
  document.getElementById("checkin-month-label").textContent = `${year}年${month + 1}月`;
  calendar.innerHTML = "";
  ["周一", "周二", "周三", "周四", "周五", "周六", "周日"].forEach(day => {
    const heading = document.createElement("div"); heading.className = "calendar-weekday"; heading.textContent = day; calendar.appendChild(heading);
  });
  for (let i = 0; i < offset; i++) { const blank = document.createElement("div"); blank.className = "calendar-day is-empty"; calendar.appendChild(blank); }
  for (let day = 1; day <= daysInMonth; day++) {
    const key = dateKey(year, month, day), isCompleted = checkinData[key] === true;
    if (isCompleted) completed++;
    const button = document.createElement("button");
    button.type = "button";
    button.className = `calendar-day${isCompleted ? " is-completed" : ""}${key === todayKey ? " is-today" : ""}`;
    button.disabled = !isEditor;
    button.setAttribute("aria-pressed", String(isCompleted));
    button.setAttribute("aria-label", `${year}年${month + 1}月${day}日，${isCompleted ? "已完成" : "未完成"}${isEditor ? "，点击切换状态" : ""}`);
    button.innerHTML = `<span class="day-number">${day}</span><span class="day-status">${isCompleted ? "✓ 已完成" : "○ 未完成"}</span>`;
    button.addEventListener("click", () => toggleCheckin(key));
    calendar.appendChild(button);
  }
  document.getElementById("checkin-completed").textContent = completed;
  document.getElementById("checkin-rate").textContent = `${Math.round(completed / daysInMonth * 100)}%`;
  document.getElementById("checkin-total").textContent = daysInMonth;
}
async function toggleCheckin(key) {
  if (!isEditor) return;
  const previous = { ...checkinData };
  if (checkinData[key] === true) delete checkinData[key]; else checkinData[key] = true;
  renderCheckinCalendar();
  const ok = await persistCloudData();
  if (!ok) { checkinData = previous; renderCheckinCalendar(); }
}
function changeCheckinMonth(offset) { checkinMonth = new Date(checkinMonth.getFullYear(), checkinMonth.getMonth() + offset, 1); renderCheckinCalendar(); }
function goCheckinToday() { const today = new Date(); checkinMonth = new Date(today.getFullYear(), today.getMonth(), 1); renderCheckinCalendar(); }

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
}
function escapeAttr(value) { return escapeHtml(value); }
