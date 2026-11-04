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

// CloudBase PostgreSQL 云端配置
const CLOUDBASE_ENV_ID = "burning-marten-d8gqqyki2b983196b";
// Publishable Key 属于可公开的客户端凭证；此版本通过匿名会话取得 anon 身份，不在代码中保存高权限密钥。
const CLOUDBASE_PUBLISHABLE_KEY = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjAzM2NjMTM4LTg2NDAtNDE1ZC04MGJjLTYyYzAxYjMzNDYyMiJ9.eyJpc3MiOiJodHRwczovL2J1cm5pbmctbWFydGVuLWQ4Z3FxeWtpMmI5ODMxOTZiLmFwLXNoYW5naGFpLnRjYi1hcGkudGVuY2VudGNsb3VkYXBpLmNvbSIsInN1YiI6ImFub24iLCJhdWQiOiJidXJuaW5nLW1hcnRlbi1kOGdxcXlraTJiOTgzMTk2YiIsImV4cCI6NDA5NzM4NTc1NCwiaWF0IjoxNzkzNzAyNTU0LCJub25jZSI6IkRDYnhibWVCUjZlY25IUmI1Ml9UVkEiLCJhdF9oYXNoIjoiRENieGJtZUJSNmVjbkhSYjUyX1RWQSIsIm5hbWUiOiJBbm9ueW1vdXMiLCJzY29wZSI6ImFub255bW91cyIsInByb2plY3RfaWQiOiJidXJuaW5nLW1hcnRlbi1kOGdxcXlraTJiOTgzMTk2YiIsIm1ldGEiOnsicGxhdGZvcm0iOiJQdWJsaXNoYWJsZUtleSJ9LCJyb2xlIjoiYW5vbiIsImlzX2Fub255bW91cyI6dHJ1ZSwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiYW5vbnltb3VzIiwicHJvdmlkZXJzIjpbImFub255bW91cyJdfSwidXNlcl9tZXRhZGF0YSI6eyJuYW1lIjoiQW5vbnltb3VzIn0sInVzZXJfdHlwZSI6IiIsImNsaWVudF90eXBlIjoiY2xpZW50X3VzZXIiLCJpc19zeXN0ZW1fYWRtaW4iOmZhbHNlfQ.GB9YFIKuE9e8aOfWKOfsJyhg843bM8MUrDv0ywNpfp4a8QWlj8cDEBHCpFFi5Ilhnt3QyE511sgTycMuk_SsXKLhwByHOJp-iqHxRR2roAeijIQYZNLKacNPrDjab1BqEss5o-MGVXSe2NNDUy1GFy7a9ylyCSWFubUXjzclvTaxBEm_hJZl2186QUkBRXxtCqxFenpojSpKGXZ9RSJLJG8zPAXjn-qA5aT30e9jm34uK3VRxANDQ_YyRd3KSoEXOnc8hw5pW-MfgCIsgUGsC2Pton9L9cUVp13ZkeVYnyi9Hq8c35k8_hsh02U-h6iOpXeooTqvl9t1WDnxEE46gA";
const cloudApp = cloudbase.init({
  env: CLOUDBASE_ENV_ID,
  accessKey: CLOUDBASE_PUBLISHABLE_KEY
});
const cloudAuth = cloudApp.auth;
const cloudDb = cloudApp.rdb();
const SITE_ROW_ID = "main";
let isEditor = false;
let appData = JSON.parse(JSON.stringify(initialData));
let checkinData = {};
let currentDayId = appData.days.length > 0 ? appData.days[0].id : 1;
let cloudReady = false;
let cloudSaveTimer = null;
let checkinMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);

document.addEventListener("DOMContentLoaded", initCloudApp);

async function initCloudApp() {
  try {
    // 优先恢复已登录管理员会话；否则建立匿名访客会话。
    const sessionResult = await cloudAuth.getSession();
    const session = sessionResult?.data?.session || sessionResult?.session || null;
    if (!session) await cloudAuth.signInAnonymously();
    await loadCloudData();
    cloudReady = true;
    setCloudStatus("☁️ 云端已连接", true);
  } catch (error) {
    console.error("CloudBase 初始化失败：", error);
    setCloudStatus("⚠️ 云端连接失败", false);
    alert("暂时无法连接云端。请检查网络后刷新页面。\n" + (error.message || ""));
  }
  renderShoppingList();
  renderTabs();
  renderDayContent(currentDayId);
  renderCheckinCalendar();
}

function setCloudStatus(message, ok) {
  const el = document.getElementById("cloud-status");
  if (el) { el.textContent = message; el.style.color = ok ? "#25845c" : "#b45309"; }
}

function setEditorMode(enabled) {
  isEditor = enabled;
  document.body.classList.toggle("is-editor", enabled);
  const badge = document.getElementById("role-badge");
  const button = document.getElementById("auth-btn");
  badge.innerText = enabled ? "✏️ 管理员模式" : "👀 浏览模式";
  badge.className = enabled ? "badge badge-editor" : "badge badge-viewer";
  button.innerText = enabled ? "退出登录" : "管理员登录";
  renderShoppingList(); renderTabs(); renderDayContent(currentDayId); renderCheckinCalendar();
}

async function toggleAuth() {
  if (isEditor) {
    try { await cloudAuth.signOut(); } catch (e) { console.warn(e); }
    setEditorMode(false);
    try { await cloudAuth.signInAnonymously(); } catch (e) { console.warn(e); }
    return;
  }
  const username = prompt("请输入管理员用户名：");
  if (!username) return;
  const password = prompt("请输入管理员密码：");
  if (password === null || !password) return;
  try {
    await cloudAuth.signInWithPassword({ username: username.trim(), password });
    const { data, error } = await cloudDb.from("site_admins").select("user_id");
    if (error) throw error;
    const sessionResult = await cloudAuth.getSession();
    const session = sessionResult?.data?.session || sessionResult?.session;
    const uid = session?.user?.id || session?.user?.sub;
    if (!uid || !(data || []).some(row => String(row.user_id) === String(uid))) {
      await cloudAuth.signOut();
      await cloudAuth.signInAnonymously();
      throw new Error("此账号尚未获得网站管理员权限。");
    }
    setEditorMode(true);
    await loadCloudData();
    alert("管理员登录成功！现在可以编辑并保存，其他设备会同步更新。");
  } catch (error) {
    console.error(error);
    alert("登录失败：" + (error.message || "请检查用户名和密码。"));
  }
}

async function loadCloudData() {
  const { data, error } = await cloudDb.from("site_data").select("id,content").eq("id", SITE_ROW_ID);
  if (error) throw error;
  if (data && data.length) {
    const content = data[0].content || {};
    if (content.shoppingList && content.days) appData = content;
    checkinData = content.checkins || {};
  } else {
    appData = JSON.parse(JSON.stringify(initialData));
    checkinData = {};
    // 首次初始化由已授权管理员写入；访客只使用内置默认内容。
    if (isEditor) await persistCloudData(false);
  }
  currentDayId = appData.days.length ? appData.days[0].id : 1;
}

async function persistCloudData(showMessage = true) {
  if (!cloudReady && !isEditor) return false;
  const content = { ...appData, checkins: checkinData };
  const { data: rows, error: readError } = await cloudDb.from("site_data").select("id").eq("id", SITE_ROW_ID);
  if (readError) throw readError;
  let result;
  if (rows && rows.length) {
    result = await cloudDb.from("site_data").update({ content, updated_at: new Date().toISOString() }).eq("id", SITE_ROW_ID);
  } else {
    result = await cloudDb.from("site_data").insert({ id: SITE_ROW_ID, content, updated_at: new Date().toISOString() });
  }
  if (result.error) throw result.error;
  if (showMessage) alert("☁️ 已保存到云端，其他设备刷新后即可看到最新内容！");
  setCloudStatus("☁️ 云端同步正常", true);
  return true;
}

function scheduleCloudSave() {
  if (!isEditor) return;
  clearTimeout(cloudSaveTimer);
  cloudSaveTimer = setTimeout(async () => {
    try { await persistCloudData(false); }
    catch (e) { console.error(e); setCloudStatus("⚠️ 自动同步失败，请手动保存", false); }
  }, 700);
}

// ---- 🛒 采购清单功能 ----
function renderShoppingList() {
  const container = document.getElementById("shopping-list");
  container.innerHTML = "";
  appData.shoppingList.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "item-box";
    div.innerHTML = `
      <span class="view-only"><strong>${item.name}:</strong> ${item.amount}</span>
      <input type="text" class="edit-only" value="${item.name}" placeholder="食材名称" onchange="appData.shoppingList[${index}].name = this.value">
      <input type="text" class="edit-only" value="${item.amount}" placeholder="数量" onchange="appData.shoppingList[${index}].amount = this.value">
      <button class="edit-only btn-danger" onclick="deleteShoppingItem(${index})">🗑️</button>
    `;
    container.appendChild(div);
  });
}

function addShoppingItem() {
  appData.shoppingList.push({ name: "新食材", amount: "适量" });
  renderShoppingList();

  scheduleCloudSave();
}

function deleteShoppingItem(index) {
  appData.shoppingList.splice(index, 1);
  renderShoppingList();

  scheduleCloudSave();
}

// ---- 📅 动态天数功能 ----
function renderTabs() {
  const container = document.getElementById("day-tabs");
  container.innerHTML = "";
  
  if (appData.days.length === 0) return;

  if (!appData.days.some(d => d.id === currentDayId)) {
    currentDayId = appData.days[0].id;
  }

  appData.days.forEach(d => {
    const btn = document.createElement("button");
    btn.className = `tab-btn ${d.id === currentDayId ? 'active' : ''}`;
    btn.innerText = d.name;
    btn.onclick = () => {
      currentDayId = d.id;
      renderTabs();
      renderDayContent(currentDayId);
    };
    container.appendChild(btn);
  });
}

function renderDayContent(dayId) {
  const container = document.getElementById("day-content");
  const dayIndex = appData.days.findIndex(d => d.id === dayId);
  if (dayIndex === -1) {
    container.innerHTML = "<p>暂无食谱，请点击追加天数。</p>";
    return;
  }
  const dayData = appData.days[dayIndex];

  let html = "";
  
  // 编辑模式：修改天数名、删除整天、新增一餐
  if (isEditor) {
    html += `
      <div class="day-header-edit">
        <label>🏷️ 天数名称：</label>
        <input type="text" value="${dayData.name}" onchange="appData.days[${dayIndex}].name = this.value; renderTabs();">
        <button class="btn-primary btn-sm" onclick="addMeal(${dayIndex})">➕ 添加一餐</button>
        <button class="btn-danger btn-sm" style="margin-left:auto;" onclick="deleteDay(${dayId})">🗑️ 删除整天食谱</button>
      </div>
    `;
  }

  // 渲染每餐
  dayData.meals.forEach((meal, mealIndex) => {
    html += `
      <div class="meal-block">
        <!-- 浏览模式下的标题 -->
        <div class="view-only meal-title" style="font-size:1.1rem; color:var(--primary); font-weight:bold; margin-bottom:8px;">
          ${meal.type}：${meal.name}
        </div>
        
        <!-- 编辑模式下的标题 -->
        <div class="edit-only meal-title-row">
          <div style="display:flex; gap:8px; align-items:center; width:80%;">
            <input type="text" style="width: 80px;" value="${meal.type}" onchange="appData.days[${dayIndex}].meals[${mealIndex}].type = this.value">
            <span>：</span>
            <input type="text" style="flex:1;" value="${meal.name}" onchange="appData.days[${dayIndex}].meals[${mealIndex}].name = this.value">
          </div>
          <button class="btn-danger btn-sm" onclick="deleteMeal(${dayIndex}, ${mealIndex})">删除此餐</button>
        </div>

        <div class="section-title">🥗 食材：</div>
        <div class="view-only">
          <ul>${meal.ingredients.map(ing => `<li>${ing}</li>`).join("")}</ul>
        </div>
        <div class="edit-only" style="margin: 5px 0;">
          ${meal.ingredients.map((ing, ingIdx) => `
            <div class="editable-list-item">
              <input type="text" value="${ing}" onchange="appData.days[${dayIndex}].meals[${mealIndex}].ingredients[${ingIdx}] = this.value">
              <button class="btn-danger btn-sm" onclick="deleteIngredient(${dayIndex}, ${mealIndex}, ${ingIdx})">×</button>
            </div>
          `).join("")}
          <button class="btn-primary btn-sm" style="margin-top:4px;" onclick="addIngredient(${dayIndex}, ${mealIndex})">+ 添加食材</button>
        </div>

        <div class="section-title">🍳 做法：</div>
        <div class="view-only">
          <ol>${meal.steps.map(step => `<li>${step}</li>`).join("")}</ol>
        </div>
        <div class="edit-only" style="margin: 5px 0;">
          ${meal.steps.map((step, stepIdx) => `
            <div class="editable-list-item">
              <input type="text" value="${step}" onchange="appData.days[${dayIndex}].meals[${mealIndex}].steps[${stepIdx}] = this.value">
              <button class="btn-danger btn-sm" onclick="deleteStep(${dayIndex}, ${mealIndex}, ${stepIdx})">×</button>
            </div>
          `).join("")}
          <button class="btn-primary btn-sm" style="margin-top:4px;" onclick="addStep(${dayIndex}, ${mealIndex})">+ 添加步骤</button>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// 动态管理天数、餐食、食材、步骤的函数
function addDay() {
  const newId = Date.now();
  const nextNum = appData.days.length + 1;
  appData.days.push({
    id: newId,
    name: `第${nextNum}天`,
    meals: [
      { type: "早餐", name: "自定义早餐", ingredients: ["燕麦40克"], steps: ["煮熟即可"] }
    ]
  });
  currentDayId = newId;
  renderTabs();
  renderDayContent(currentDayId);

  scheduleCloudSave();
}

function deleteDay(dayId) {
  if (confirm("确定要删除这一整天的食谱吗？")) {
    appData.days = appData.days.filter(d => d.id !== dayId);
    if (appData.days.length > 0) {
      currentDayId = appData.days[0].id;
    }
    renderTabs();
    renderDayContent(currentDayId);
  }

  scheduleCloudSave();
}

function addMeal(dayIndex) {
  appData.days[dayIndex].meals.push({ type: "加餐", name: "新餐点", ingredients: ["食材"], steps: ["做法"] });
  renderDayContent(currentDayId);

  scheduleCloudSave();
}

function deleteMeal(dayIndex, mealIndex) {
  appData.days[dayIndex].meals.splice(mealIndex, 1);
  renderDayContent(currentDayId);

  scheduleCloudSave();
}

function addIngredient(dayIndex, mealIndex) {
  appData.days[dayIndex].meals[mealIndex].ingredients.push("新食材");
  renderDayContent(currentDayId);

  scheduleCloudSave();
}

function deleteIngredient(dayIndex, mealIndex, ingIdx) {
  appData.days[dayIndex].meals[mealIndex].ingredients.splice(ingIdx, 1);
  renderDayContent(currentDayId);

  scheduleCloudSave();
}

function addStep(dayIndex, mealIndex) {
  appData.days[dayIndex].meals[mealIndex].steps.push("新步骤");
  renderDayContent(currentDayId);

  scheduleCloudSave();
}

function deleteStep(dayIndex, mealIndex, stepIdx) {
  appData.days[dayIndex].meals[mealIndex].steps.splice(stepIdx, 1);
  renderDayContent(currentDayId);

  scheduleCloudSave();
}

// 统一保存到 CloudBase
async function saveData() {
  if (!isEditor) { alert("请先登录管理员账号。"); return; }
  try { await persistCloudData(true); }
  catch (error) { console.error(error); alert("云端保存失败：" + (error.message || "请检查网络后重试。")); }
}

// 每日打卡日历：打卡状态与食谱数据一起保存在云端。
function dateKey(year, month, day) { return `${year}-${String(month + 1).padStart(2,"0")}-${String(day).padStart(2,"0")}`; }
function renderCheckinCalendar() {
  const calendar = document.getElementById("checkin-calendar");
  if (!calendar) return;
  const year = checkinMonth.getFullYear(), month = checkinMonth.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  document.getElementById("checkin-month-label").textContent = `${year}年${month + 1}月`;
  calendar.innerHTML = "";
  ["日","一","二","三","四","五","六"].forEach(d => { const el=document.createElement("div"); el.className="calendar-weekday"; el.textContent=d; calendar.appendChild(el); });
  for (let i=0;i<firstDay;i++){ const blank=document.createElement("div"); blank.className="calendar-blank"; calendar.appendChild(blank); }
  let completed=0;
  for(let day=1;day<=daysInMonth;day++){
    const key=dateKey(year,month,day), done=checkinData[key]===true; if(done) completed++;
    const btn=document.createElement("button"); btn.type="button"; btn.className="calendar-day"+(done?" completed":""); btn.textContent=day; btn.setAttribute("aria-label",`${day}日${done?"已完成":"未完成"}`);
    btn.disabled=!isEditor; btn.title=isEditor?"点击切换打卡状态":"管理员登录后可打卡";
    btn.addEventListener("click",()=>toggleCheckin(key)); calendar.appendChild(btn);
  }
  document.getElementById("checkin-completed").textContent=completed;
  document.getElementById("checkin-rate").textContent=`${Math.round(completed/daysInMonth*100)}%`;
  document.getElementById("checkin-total").textContent=daysInMonth;
  const tip=document.querySelector(".checkin-tip"); if(tip) tip.textContent=isEditor?"♡ 点击日期即可切换打卡状态，修改会自动同步到云端。":"♡ 登录管理员账号后即可进行每日打卡。";
}
async function toggleCheckin(key){ if(!isEditor)return; if(checkinData[key]) delete checkinData[key]; else checkinData[key]=true; renderCheckinCalendar(); scheduleCloudSave(); }
function changeCheckinMonth(offset){ checkinMonth=new Date(checkinMonth.getFullYear(),checkinMonth.getMonth()+offset,1); renderCheckinCalendar(); }
function goCheckinToday(){ const now=new Date(); checkinMonth=new Date(now.getFullYear(),now.getMonth(),1); renderCheckinCalendar(); }

// 编辑操作在交互完成后自动排队同步；仍可使用“保存全部修改”立即保存。
document.addEventListener("change", (event) => {
  if (isEditor && event.target.matches("input, textarea, select")) scheduleCloudSave();
});
const _renderShoppingList = renderShoppingList;
const _renderTabs = renderTabs;
