// 核心数据 (从 eat.xlsx 提取转换)
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
      day: 1,
      name: "第1天",
      meals: [
        { type: "早餐", name: "香蕉牛奶燕麦＋水煮蛋", ingredients: ["燕麦40克", "纯牛奶250毫升", "香蕉80克", "鸡蛋2个"], steps: ["鸡蛋放入锅中，加水煮8～10分钟。", "燕麦放入小锅，加入牛奶。", "小火煮3～5分钟，期间搅拌。", "香蕉切片放入燕麦中。", "搭配水煮蛋食用。"] },
        { type: "午餐", name: "黑椒鸡胸肉＋蒜蓉西兰花＋米饭", ingredients: ["鸡胸肉150克", "西兰花200克", "熟米饭150克", "食用油8克", "生抽5毫升", "黑胡椒、蒜末、盐少许"], steps: ["鸡胸肉切薄片。", "加生抽、黑胡椒腌制10分钟。", "锅中放4克油，倒入鸡肉炒熟。", "西兰花切小朵，放入沸水焯2分钟。", "锅中放剩余4克油和蒜末，倒入西兰花翻炒。", "加少许盐，搭配米饭。"] },
        { type: "晚餐", name: "虾仁豆腐汤＋蒸红薯", ingredients: ["虾仁150克", "豆腐150克", "青菜200克", "红薯180克", "食用油8克", "姜片、盐少许"], steps: ["红薯洗净切块，放入电饭煲蒸熟。", "锅中加水，放入姜片烧开。", "加入虾仁，煮至变色。", "加入豆腐块，继续煮3分钟。", "放入青菜，煮熟后加盐调味。", "最后加入少量食用油即可。"] }
      ]
    },
    {
      day: 2,
      name: "第2天",
      meals: [
        { type: "早餐", name: "全麦鸡蛋三明治＋牛奶", ingredients: ["全麦面包70克", "鸡蛋2个", "牛奶250毫升"], steps: ["鸡蛋煮熟，剥壳切片。", "全麦面包放入平底锅，两面稍微加热。", "将鸡蛋夹入面包。", "可以加少许黑胡椒，不需要额外放沙拉酱。", "配牛奶食用。"] },
        { type: "午餐", name: "青椒牛肉丝＋胡萝卜＋米饭", ingredients: ["牛肉140克", "青椒150克", "胡萝卜100克", "熟米饭150克", "食用油8克", "生抽5毫升、黑胡椒少许"], steps: ["牛肉切丝，加入生抽和黑胡椒腌10分钟。", "青椒、胡萝卜切丝。", "锅中放油，先倒入牛肉炒至熟透。", "加入胡萝卜翻炒2分钟。", "加入青椒继续炒熟。", "加少许盐，搭配米饭。"] },
        { type: "晚餐", name: "虾仁蒸蛋＋玉米＋凉拌黄瓜", ingredients: ["虾仁120克", "鸡蛋1个", "玉米150克", "黄瓜200克", "豆腐150克", "食用油8克"], steps: ["鸡蛋打散，加入约1.5倍重量的温水，搅拌均匀。", "放入虾仁，盖上盘子。", "水开后蒸约10～12分钟，确认蛋液凝固、虾仁熟透。", "玉米放电饭煲蒸熟。", "黄瓜拍碎，加入少许生抽、醋和盐拌匀。", "豆腐切片，用食用油煎至两面微黄。"] }
      ]
    },
    {
      day: 3,
      name: "第3天",
      meals: [
        { type: "早餐", name: "苹果燕麦牛奶＋水煮蛋", ingredients: ["燕麦40克", "牛奶250毫升", "苹果100克", "鸡蛋2个"], steps: ["燕麦加入牛奶，小火煮3～5分钟。", "苹果切成小块。", "将苹果放在燕麦上。", "鸡蛋煮熟，搭配食用。"] },
        { type: "午餐", name: "鸡丝荞麦面", ingredients: ["干荞麦面70克", "鸡胸肉150克", "青菜200克", "食用油8克", "生抽、醋、蒜末少许"], steps: ["鸡胸肉放入锅中，加姜片和清水煮熟。", "捞出放凉，撕成鸡丝。", "荞麦面按照包装说明煮熟。", "青菜放入沸水中焯熟。", "将面条、鸡丝、青菜放入碗中。", "加入生抽、醋、蒜末和食用油拌匀。"] },
        { type: "晚餐", name: "肉末豆腐＋蒸紫薯＋西兰花", ingredients: ["瘦猪肉120克", "豆腐150克", "紫薯180克", "西兰花200克", "食用油8克", "生抽、盐少许"], steps: ["紫薯切块，放入电饭煲蒸熟。", "瘦猪肉剁成肉末。", "锅中放油，加入肉末炒至熟透。", "加入豆腐块，轻轻翻炒。", "加入少许生抽和清水，焖3分钟。", "西兰花焯熟，搭配食用。"] }
      ]
    },
    {
      day: 4,
      name: "第4天",
      meals: [
        { type: "早餐", name: "红薯＋鸡蛋＋牛奶", ingredients: ["红薯180克", "鸡蛋2个", "牛奶250毫升"], steps: ["红薯切块，放入电饭煲蒸熟。", "鸡蛋煮熟。", "搭配牛奶食用。"] },
        { type: "午餐", name: "空气炸锅黑椒鸡腿饭", ingredients: ["去皮鸡腿肉160克", "西兰花200克", "熟米饭150克", "食用油8克", "生抽、黑胡椒、蒜末少许"], steps: ["鸡腿肉去皮，切成小块。", "加生抽、黑胡椒和蒜末腌制15分钟。", "放入空气炸锅，180℃烤15～20分钟，中途翻面。", "确认鸡肉内部完全熟透。", "西兰花焯水后，用食用油和蒜末翻炒。", "配米饭食用。"] },
        { type: "晚餐", name: "番茄牛肉豆腐汤", ingredients: ["牛肉120克", "番茄200克", "豆腐100克", "熟米饭100克", "青菜150克", "食用油8克"], steps: ["牛肉切薄片，番茄切块。", "锅中放油，倒入番茄炒软。", "加入清水，煮开。", "放入牛肉片，煮至完全熟透。", "加入豆腐块和青菜。", "加少许盐调味，搭配米饭。"] }
      ]
    },
    {
      day: 5,
      name: "第5天",
      meals: [
        { type: "早餐", name: "香蕉燕麦牛奶＋鸡蛋", ingredients: ["燕麦40克", "牛奶250毫升", "香蕉80克", "鸡蛋2个"], steps: ["燕麦加入牛奶，小火煮3～5分钟。", "香蕉切片。", "放入燕麦中。", "鸡蛋煮熟，搭配食用。"] },
        { type: "午餐", name: "虾仁西葫芦炒蛋＋米饭", ingredients: ["虾仁160克", "鸡蛋1个", "西葫芦200克", "熟米饭150克", "食用油8克", "盐、黑胡椒少许"], steps: ["西葫芦切片，虾仁擦干水分。", "鸡蛋打散。", "锅中放少量油，先将鸡蛋炒熟，盛出。", "锅中加入剩余油，放入虾仁炒熟。", "加入西葫芦翻炒至变软。", "倒入鸡蛋，加少许盐调味。"] },
        { type: "晚餐", name: "瘦肉豆腐炒南瓜＋青菜", ingredients: ["瘦猪肉130克", "豆腐150克", "南瓜200克", "青菜200克", "食用油8克"], steps: ["南瓜切成薄片，放入电饭煲蒸熟。", "瘦猪肉切片。", "锅中放油，加入猪肉炒熟。", "放入豆腐块，轻轻翻炒。", "加入南瓜，少许生抽和盐调味。", "青菜焯熟或清炒，搭配食用。"] }
      ]
    },
    {
      day: 6,
      name: "第6天",
      meals: [
        { type: "早餐", name: "鸡蛋全麦吐司＋牛奶", ingredients: ["全麦面包70克", "鸡蛋2个", "牛奶250毫升"], steps: ["鸡蛋煮熟，剥壳。", "面包放入平底锅稍微烘热。", "鸡蛋切片，夹入面包。", "搭配牛奶食用。"] },
        { type: "午餐", name: "香菇鸡肉饭", ingredients: ["鸡胸肉150克", "香菇100克", "青菜150克", "熟米饭150克", "食用油8克", "生抽、盐少许"], steps: ["鸡胸肉切块，香菇切片。", "锅中放油，倒入鸡肉炒至变色。", "加入香菇翻炒。", "加入少许生抽和清水。", "盖上锅盖焖3～5分钟，确保鸡肉熟透。", "青菜焯熟，配米饭。"] },
        { type: "晚餐", name: "牛肉豆腐煎饼＋玉米黄瓜", ingredients: ["牛肉120克", "豆腐150克", "玉米150克", "黄瓜200克", "食用油8克"], steps: ["牛肉剁碎，豆腐压碎。", "将牛肉和豆腐混合，加盐和黑胡椒。", "捏成小肉饼。", "平底锅放油，将肉饼两面煎至金黄。", "加少许水，盖锅焖至内部完全熟透。", "玉米蒸熟，黄瓜切片加醋凉拌。"] }
      ]
    },
    {
      day: 7,
      name: "第7天",
      meals: [
        { type: "早餐", name: "苹果牛奶燕麦＋鸡蛋", ingredients: ["燕麦40克", "牛奶250毫升", "苹果100克", "鸡蛋2个"], steps: ["燕麦加牛奶煮3～5分钟。", "苹果切小块放入燕麦。", "鸡蛋煮熟，搭配食用。"] },
        { type: "午餐", name: "青椒肉丝盖饭", ingredients: ["瘦猪肉140克", "青椒150克", "包菜200克", "熟米饭150克", "食用油8克"], steps: ["猪肉切丝，加生抽腌10分钟。", "青椒切丝，包菜切块。", "锅中放油，先炒肉丝至熟透。", "加入青椒翻炒。", "包菜另外清炒或焯熟。", "配米饭食用。"] },
        { type: "晚餐", name: "蒜蓉虾仁＋煎豆腐＋烤红薯", ingredients: ["虾仁150克", "豆腐150克", "红薯180克", "西兰花200克", "食用油8克"], steps: ["红薯切块，空气炸锅180℃烤15～20分钟，直到熟透。", "虾仁加入蒜末、黑胡椒和少许盐。", "空气炸锅180℃烤6～8分钟，确保虾仁熟透。", "豆腐切片，用食用油煎至两面微黄。", "西兰花焯水，搭配食用。"] }
      ]
    }
  ]
};

// 预设管理员密码
const ADMIN_PASSWORD = "123456";
let isEditor = false;
let currentDay = 1;
let appData = JSON.parse(localStorage.getItem("diet_data")) || initialData;

// 初始化
document.addEventListener("DOMContentLoaded", () => {
  renderShoppingList();
  renderTabs();
  renderDayContent(currentDay);
});

// 身份校验
function toggleAuth() {
  if (isEditor) {
    isEditor = false;
    document.body.classList.remove("is-editor");
    document.getElementById("role-badge").innerText = "👀 浏览模式";
    document.getElementById("role-badge").className = "badge badge-viewer";
    document.getElementById("auth-btn").innerText = "解锁编辑权限";
  } else {
    const pwd = prompt("请输入编辑密码：");
    if (pwd === ADMIN_PASSWORD) {
      isEditor = true;
      document.body.classList.add("is-editor");
      document.getElementById("role-badge").innerText = "✏️ 编辑模式";
      document.getElementById("role-badge").className = "badge badge-editor";
      document.getElementById("auth-btn").innerText = "退出编辑";
      renderShoppingList();
    } else if (pwd !== null) {
      alert("密码错误！无法开启编辑模式。");
    }
  }
}

// 渲染采购清单
function renderShoppingList() {
  const container = document.getElementById("shopping-list");
  container.innerHTML = "";
  appData.shoppingList.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "item-box";
    div.innerHTML = `
      <span class="view-only"><strong>${item.name}:</strong> ${item.amount}</span>
      <input type="text" class="edit-only" value="${item.name}" onchange="appData.shoppingList[${index}].name = this.value">
      <input type="text" class="edit-only" value="${item.amount}" onchange="appData.shoppingList[${index}].amount = this.value">
    `;
    container.appendChild(div);
  });
}

function saveShoppingList() {
  localStorage.setItem("diet_data", JSON.stringify(appData));
  alert("采购清单已成功保存至本地！");
}

// 渲染星期 Tab
function renderTabs() {
  const container = document.getElementById("day-tabs");
  container.innerHTML = "";
  appData.days.forEach(d => {
    const btn = document.createElement("button");
    btn.className = `tab-btn ${d.day === currentDay ? 'active' : ''}`;
    btn.innerText = d.name;
    btn.onclick = () => {
      currentDay = d.day;
      renderTabs();
      renderDayContent(currentDay);
    };
    container.appendChild(btn);
  });
}

// 渲染每日菜谱
function renderDayContent(dayNum) {
  const container = document.getElementById("day-content");
  const dayData = appData.days.find(d => d.day === dayNum);
  if (!dayData) return;

  let html = "";
  dayData.meals.forEach((meal) => {
    html += `
      <div class="meal-block">
        <div class="meal-title">${meal.type}：${meal.name}</div>
        <div class="section-title">🥗 食材：</div>
        <ul>
          ${meal.ingredients.map(ing => `<li>${ing}</li>`).join("")}
        </ul>
        <div class="section-title">🍳 做法：</div>
        <ol>
          ${meal.steps.map(step => `<li>${step}</li>`).join("")}
        </ol>
      </div>
    `;
  });

  container.innerHTML = html;
}