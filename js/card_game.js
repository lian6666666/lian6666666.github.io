var mealresult = [];
var firstmeal = [];
var secondmeal = [];
var thirdmeal = [];
var meal = [firstmeal, secondmeal, thirdmeal, mealresult];
var cards2 = [
  {
    point1: 1,
    img: "yl1card1",
    title: "御飯糰",
    type: "肉鬆、雙蔬鮪魚",
    foodcomments: "沒有人能在超商飯糰打贏7-11！御飯糰 in your area！！",
  },
  {
    point1: 2,
    img: "yl2card2",
    title: "關東煮",
    type: "米血糕、白蘿蔔",
    foodcomments: "免錢的湯必須裝爆，好喝。",
  },
  {
    point1: 2,
    img: "yl1card3",
    title: "大亨堡",
    type: "三起司熱狗、美式原味熱狗",
    foodcomments: "歡迎挑戰擠出最美番茄醬。（像卡通的那種）",
  },
  {
    point1: 1,
    img: "yl1card4",
    title: "御料小館",
    type: "韓風洋釀炸雞、香辣炸雞球",
    foodcomments: "選完主食後擔心廠商又偷偷減肉，那就選一包替自己加料！",
  },
  {
    point1: 2,
    img: "yl2card5",
    title: "微波麵",
    type: "青醬蛤蜊義大利麵",
    foodcomments: "青醬蛤蠣義大利麵，除了大拇指還是大拇指。",
  },
  {
    point1: 1,
    img: "yl1card6",
    title: "茶葉蛋",
    type: "所長茶葉蛋",
    foodcomments: "有裂痕的蛋剝開也可能是披著棕色外皮的騙子水煮蛋。",
  },
  {
    point1: 2,
    img: "yl2card7",
    title: "微波飯",
    type: "紅燒牛肉燴飯",
    foodcomments: "紅燒牛肉燴飯相當讚，但區域販售，想吃還得看運氣。",
  },
  {
    point1: 1,
    img: "yl1card8",
    title: "麵包",
    type: "牛奶蒸果子、紅豆麵包",
    foodcomments: "愛心牛奶球口味可能一般，但姐吃的是童年回憶na～",
  },
  {
    point1: 2,
    img: "yl1card9",
    title: "沙拉",
    type: "21Plus義式烤雞堅果沙拉",
    foodcomments: "來一碗沙拉吧，假裝你沒有打破減肥計劃hehehe...",
  },
  {
    point1: 1,
    img: "yl1card10",
    title: "熱壓吐司",
    type: "紐奧良風味烤雞、松露嫩蛋",
    foodcomments: "真的很燙，謹防被餡料暗算！",
  },
  {
    point1: 2,
    img: "yl2card11",
    title: "便當",
    type: "奮起湖軟燒肉便當",
    foodcomments: "想假裝營養均衡可以選。",
  },
  {
    point1: 0,
    img: "yl3card12",
    title: "西北風",
    type: "是空空的胃～又沒錢的月～和沒減的肥～那只好喝水～",
    foodcomments: "學校飲水機不用錢可以多喝點，現在開始168斷食。",
  },
];

var selectedCard = getRandom1(1, 12);
var result = cards2[selectedCard];
mealresult.push(result);
for (var i = 1; i <= 6; i++) {
  firstmeal.push(result);
}

var selectedCard1 = getRandom2(1, 12);
var result1 = cards2[selectedCard1];
mealresult.push(result1);
for (var i = 1; i <= 6; i++) {
  secondmeal.push(result1);
}

var selectedCard2 = getRandom3(1, 12);
var result2 = cards2[selectedCard2];
mealresult.push(result2);
for (var i = 1; i <= 6; i++) {
  thirdmeal.push(result2);
}
var animatetime = 1;

var ptext = document.getElementById("ptext");
var mainp = document.createElement("div");
mainp.setAttribute("class", "main_p");
ptext.appendChild(mainp);
var textp = document.createElement("p");
textp.classList.add("p_text");
mainp.appendChild(textp);
textp.innerText =
  "請在心中想像你餓扁的感覺，選出可口的三張牌作為你的一日三餐。";

var ptext1 = document.getElementById("ptext1");
var mainp1 = document.createElement("div");

mainp1.setAttribute("class", "main_p");
ptext1.appendChild(mainp1);
var textp1 = document.createElement("p");
textp1.classList.add("p_text");
mainp1.classList.add("hide");
mainp1.appendChild(textp1);
textp1.innerText = "根據你的選擇，屬於你的三餐卡牌是......。";

var foot = document.getElementById("foot");
var foot1 = document.createElement("div");
var foot2 = document.createElement("div");
var foot3 = document.createElement("div");
foot.classList.add("hide");
foot.classList.add("middle_foot");
foot1.classList.add("foot1");
foot2.classList.add("foot2");
foot3.classList.add("foot3");
foot3.addEventListener("animationend", footanimationtime());
foot.appendChild(foot1);
foot.appendChild(foot2);
foot.appendChild(foot3);

var resultcomments = document.getElementById("resultcomments");
var comments_title = document.createElement("div");
resultcomments.appendChild(comments_title);
comments_title.innerText = `三餐總評`;
comments_title.classList.add("comments_title");
resultcomments.classList.add("hide");
var comments_text = document.createElement("p");
resultcomments.appendChild(comments_text);
comments_text.classList.add("comments_text");
var commentstext = commentstext();

var yl_resultid_card1 = document.getElementById("yl_resultid_card1");
yl_resultid_card1.classList.add("hide");
var yl_result_card_col2 = document.createElement("div");
var yl_result_card_left = document.createElement("div");
var yl_result_card_right = document.createElement("div");
yl_result_card_col2.classList.add("col-2");
yl_result_card_left.classList.add("yl_result_card_left", "col-3");
yl_result_card_right.classList.add("yl_result_card_right", "col-7");
var yl_result_card_leftp = document.createElement("p");
yl_result_card_leftp.innerText = `早餐`;
var yl_result_card_left_img = document.createElement("img");
yl_result_card_left_img.src = resultimage(0);
var food_type = document.createElement("div");
food_type.classList.add("food_type");
var food_title1 = document.createElement("p");
var food_text1 = document.createElement("p");
food_title1.classList.add("food_title1");
food_title1.style.fontSize = `32px`;
var food_title = document.createElement("p");
var food_text = document.createElement("p");
food_title.classList.add("food_title");
food_text.classList.add("food_text");
var food_title2 = document.createElement("p");
var food_text2 = document.createElement("p");
food_title2.classList.add("food_title");
food_text2.classList.add("food_text");
food_title.innerText = `建議口味`;
food_title2.innerText = `美食銳評`;
food_text2.innerText = resultfoodcomments(0);
food_title1.innerText = resulttitle(0);
food_text.innerText = resulttype(0);
yl_resultid_card1.appendChild(yl_result_card_col2);
yl_resultid_card1.appendChild(yl_result_card_left);
yl_resultid_card1.appendChild(yl_result_card_right);
yl_result_card_left.appendChild(yl_result_card_left_img);
yl_result_card_left.appendChild(yl_result_card_leftp);
yl_result_card_right.appendChild(food_type).appendChild(food_title1);
food_type.appendChild(food_text1);
yl_result_card_right.appendChild(food_title);
yl_result_card_right.appendChild(food_text);
yl_result_card_right.appendChild(food_title2);
yl_result_card_right.appendChild(food_text2);

var yl_resultid_card2 = document.getElementById("yl_resultid_card2");
yl_resultid_card2.classList.add("hide");
var yl_result_card_col2 = document.createElement("div");
var yl_result_card_left = document.createElement("div");
var yl_result_card_right = document.createElement("div");
yl_result_card_col2.classList.add("col-2");
yl_result_card_left.classList.add("yl_result_card_left", "col-3");
yl_result_card_right.classList.add("yl_result_card_right", "col-7");
var yl_result_card_leftp = document.createElement("p");
yl_result_card_leftp.innerText = `午餐`;
var yl_result_card_left_img = document.createElement("img");
yl_result_card_left_img.src = resultimage(1);
var food_type = document.createElement("div");
food_type.classList.add("food_type");
var food_title1 = document.createElement("p");
var food_text1 = document.createElement("p");
food_title1.classList.add("food_title1");
food_title1.style.fontSize = `32px`;
var food_title = document.createElement("p");
var food_text = document.createElement("p");
food_title.classList.add("food_title");
food_text.classList.add("food_text");
var food_title2 = document.createElement("p");
var food_text2 = document.createElement("p");
food_title2.classList.add("food_title");
food_text2.classList.add("food_text");
food_title.innerText = `建議口味`;
food_title2.innerText = `美食銳評`;
food_text2.innerText = resultfoodcomments(1);
food_title1.innerText = resulttitle(1);
food_text.innerText = resulttype(1);
yl_resultid_card2.appendChild(yl_result_card_col2);
yl_resultid_card2.appendChild(yl_result_card_left);
yl_resultid_card2.appendChild(yl_result_card_right);
yl_result_card_left.appendChild(yl_result_card_left_img);
yl_result_card_left.appendChild(yl_result_card_leftp);
yl_result_card_right.appendChild(food_type).appendChild(food_title1);
food_type.appendChild(food_text1);
yl_result_card_right.appendChild(food_title);
yl_result_card_right.appendChild(food_text);
yl_result_card_right.appendChild(food_title2);
yl_result_card_right.appendChild(food_text2);

var yl_resultid_card3 = document.getElementById("yl_resultid_card3");
yl_resultid_card3.classList.add("hide");
var yl_result_card_col2 = document.createElement("div");
var yl_result_card_left = document.createElement("div");
var yl_result_card_right = document.createElement("div");
yl_result_card_col2.classList.add("col-2");
yl_result_card_left.classList.add("yl_result_card_left", "col-3");
yl_result_card_right.classList.add("yl_result_card_right", "col-7");
var yl_result_card_leftp = document.createElement("p");
yl_result_card_leftp.innerText = `晚餐`;
var yl_result_card_left_img = document.createElement("img");
yl_result_card_left_img.src = resultimage(2);
var food_type = document.createElement("div");
food_type.classList.add("food_type");
var food_title1 = document.createElement("p");
var food_text1 = document.createElement("p");
food_title1.classList.add("food_title1");
food_title1.style.fontSize = `32px`;
var food_title = document.createElement("p");
var food_text = document.createElement("p");
food_title.classList.add("food_title");
food_text.classList.add("food_text");
var food_title2 = document.createElement("p");
var food_text2 = document.createElement("p");
food_title2.classList.add("food_title");
food_text2.classList.add("food_text");
food_title.innerText = `建議口味`;
food_title2.innerText = `美食銳評`;
food_text2.innerText = resultfoodcomments(2);
food_title1.innerText = resulttitle(2);
food_text.innerText = resulttype(2);
yl_resultid_card3.appendChild(yl_result_card_col2);
yl_resultid_card3.appendChild(yl_result_card_left);
yl_resultid_card3.appendChild(yl_result_card_right);
yl_result_card_left.appendChild(yl_result_card_left_img);
yl_result_card_left.appendChild(yl_result_card_leftp);
yl_result_card_right.appendChild(food_type).appendChild(food_title1);
food_type.appendChild(food_text1);
yl_result_card_right.appendChild(food_title);
yl_result_card_right.appendChild(food_text);
yl_result_card_right.appendChild(food_title2);
yl_result_card_right.appendChild(food_text2);

var final1 = document.getElementById("finalbtn");
var finalbtn = document.createElement("div");
finalbtn.classList.add("final_btn");
final1.appendChild(finalbtn);
var start_btn1 = document.createElement("div");
//var start_btn2 = document.createElement("div");
var start_btn3 = document.createElement("div");
finalbtn.appendChild(start_btn1);
//finalbtn.appendChild(start_btn2);
finalbtn.appendChild(start_btn3);
final1.classList.add("hide");
start_btn1.classList.add("start_btn");
//start_btn2.classList.add("start_btn");
start_btn3.classList.add("start_btn");
var start_btn_a1 = document.createElement("a");
//var start_btn_a2 = document.createElement("a");
var start_btn_a3 = document.createElement("a");
start_btn_a1.innerText = ` 重新占卜`;
start_btn_a1.href = `./1_1.html`;
//start_btn_a2.innerText = `分享結果 `;
//start_btn_a2.href = `#`;
start_btn_a3.innerText = `查看圖鑑 `;
start_btn_a3.href = `./2_0.html`;
start_btn1.appendChild(start_btn_a1);
//start_btn2.appendChild(start_btn_a2);
start_btn3.appendChild(start_btn_a3);

var game1 = document.getElementById("yl_card1");
var grid = document.createElement("div");
grid.setAttribute("class", "grid");
grid.addEventListener("click", clicktime());
grid.addEventListener("animationend", animationtime());

game1.appendChild(grid);
firstmeal.forEach((item) => {
  var card = document.createElement("div");
  card.classList.add("card");
  const back = document.createElement("div");
  back.classList.add("back");
  back.style.backgroundImage = `url(./img/1_1_card_front.png)`;
  const front = document.createElement("div");
  front.classList.add("front");
  front.style.backgroundImage = `url(./img/${item.img}.png)`;
  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

var game2 = document.getElementById("yl_card2");
var grid = document.createElement("div");
game2.classList.add("hide");
grid.addEventListener("click", clicktime());
grid.addEventListener("animationend", animationtime());
grid.setAttribute("class", "grid");
game2.appendChild(grid);
secondmeal.forEach((item) => {
  var card = document.createElement("div");
  card.classList.add("card");
  const back = document.createElement("div");
  back.classList.add("back");
  back.style.backgroundImage = `url(./img/1_2_card_front.png)`;
  const front = document.createElement("div");
  front.classList.add("front");
  front.style.backgroundImage = `url(./img/${item.img}.png)`;
  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

var game3 = document.getElementById("yl_card3");
var grid = document.createElement("div");
game3.classList.add("hide");
grid.addEventListener("click", clicktime());
grid.addEventListener("animationend", animationtime());
grid.setAttribute("class", "grid");
game3.appendChild(grid);
thirdmeal.forEach((item) => {
  var card = document.createElement("div");
  card.classList.add("card");
  const back = document.createElement("div");
  back.classList.add("back");
  back.style.backgroundImage = `url(./img/1_3_card_front.png)`;
  const front = document.createElement("div");
  front.classList.add("front");
  front.style.backgroundImage = `url(./img/${item.img}.png)`;
  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

var clicklimit = 1;
function clicktime() {
  grid.addEventListener("click", function (clickevent) {
    let clicked = clickevent.target;
    // alert(2);
    if (clicklimit < 2) {
      clicked.classList.add("selected");
      clicked.parentNode.classList.add("gridmove");
      clicklimit++;
      //alert(2);
    }
  });
}
document.getElementById("yl_card1").animate(
  [
    // keyframes
    { transform: "translateX(-2000px)" },
    { transform: "translateX(0px)" },
  ],
  {
    // timing options
    duration: 1000,
    iterations: 1,
  }
);
function animationtime() {
  grid.addEventListener("animationend", () => {
    animatetime++;
    if (animatetime > 1) {
      clicklimit = 1;

      document.getElementById("yl_card2").animate(
        [
          // keyframes
          { transform: "translateX(-2000px)" },
          { transform: "translateX(0px)" },
        ],
        {
          // timing options
          duration: 1000,
          iterations: 1,
        }
      );
      game2.classList.remove("hide");
      game1.classList.add("hide");
    }
    if (animatetime > 2) {
      clicklimit = 1;
      game2.classList.add("hide");
      game3.classList.remove("hide");
      document.getElementById("yl_card3").animate(
        [
          // keyframes
          { transform: "translateX(-2000px)" },
          { transform: "translateX(0px)" },
        ],
        {
          // timing options
          duration: 1000,
          iterations: 1,
        }
      );
    }
    if (animatetime > 3) {
      clicklimit = 1;
      game3.classList.add("hide");
      ptext.classList.add("hide");
      mainp1.classList.remove("hide");
      foot.classList.remove("hide");
    }
  });
}
function footanimationtime() {
  foot3.addEventListener("animationend", () => {
    animatetime++;
    if (animatetime > 4) {
      mainp1.classList.add("hide");
      foot.classList.add("hide");
      resultcomments.classList.remove("hide");
      resultcomments.classList.add("comments");
      yl_resultid_card1.classList.remove("hide");
      yl_resultid_card2.classList.remove("hide");
      yl_resultid_card3.classList.remove("hide");
      yl_resultid_card1.classList.add("yl_result_card1");
      yl_resultid_card2.classList.add("yl_result_card2");
      yl_resultid_card3.classList.add("yl_result_card3");
      final1.classList.remove("hide");
    }
  });
}

function commentstext() {
  if (
    (mealresult[0] === mealresult[1]) === mealresult[2] &&
    resultvaluesum() != 0
  ) {
    return (comments_text.innerText = `天啊！論三個一樣的機率，只能說你超愛。
`);
  } else {
    if (resultvaluesum() == 6) {
      return (comments_text.innerText = `今天的你會吃得很飽呦！！！（發福警告）`);
    }
    if (resultvaluesum() == 5) {
      return (comments_text.innerText = `剛剛好的份量，剛剛好的幸福～
`);
    }
    if (resultvaluesum() == 4) {
      return (comments_text.innerText = `emmm...感覺再多吃一點也行？

`);
    }
    if (resultvaluesum() == 3) {
      return (comments_text.innerText = `喜提月底套餐。
`);
    }
    if (resultvaluesum() == 2) {
      return (comments_text.innerText = `喜提月底套餐。
`);
    }
    if (resultvaluesum() == 1) {
      return (comments_text.innerText = `：（假裝在進行168斷食）
。
`);
    }
    if (resultvaluesum() == 0) {
      return (comments_text.innerText = `哇喔......這都被你抽到？
`);
    }
  }
}

function getRandom1(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function getRandom2(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function getRandom3(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function resultvalue() {
  return mealresult.map((item) => item.point1);
}

function resultvaluesum() {
  return resultvalue().reduce((a, b) => a + b);
}

function resultimage(x) {
  return `./img/${mealresult[x].img}.png`;
}
function resulttitle(x) {
  return mealresult[x].title;
}
function resulttype(x) {
  return mealresult[x].type;
}
function resultfoodcomments(x) {
  return mealresult[x].foodcomments;
}
