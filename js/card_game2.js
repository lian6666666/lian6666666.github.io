var mealresult = [];
var firstmeal = [];
var meal = ["firstmeal", "secondmeal", "thirdmeal", "mealresult"];
var cards2 = [
  {
    name: "1",
    img: "yl1card1",
  },
  {
    name: "2",
    img: "yl2card2",
  },
  {
    name: "1",
    img: "yl1card3",
  },
  {
    name: "1",
    img: "yl1card4",
  },
  {
    name: "2",
    img: "yl2card5",
  },
  {
    name: "1",
    img: "yl1card6",
  },
  {
    name: "2",
    img: "yl2card7",
  },
  {
    name: "1",
    img: "yl1card8",
  },
  {
    name: "1",
    img: "yl1card9",
  },
  {
    name: "1",
    img: "yl1card10",
  },
  {
    name: "2",
    img: "yl2card11",
  },
  {
    name: "3",
    img: "yl3card12",
  },
];

var cardfront1 = selectCard();

var game = document.getElementById("yl_card");
var grid = document.createElement("div");
grid.classList.remove("hide");
grid.setAttribute("class", "grid");
game.appendChild(grid);
secondmeal.forEach((item) => {
  var card = document.createElement("div");
  card.classList.add("card");
  card.dataset.name = item.name;
  card.style.backgroundImage = `url(./img/${item.img}.png)`;
  const front = document.createElement("div");
  front.classList.add("front");
  const back = document.createElement("div");
  back.classList.add("back");
  back.style.backgroundImage = `url(./img/1_2_card_front.png)`;
  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

var count = 1;
var animate = 1;
grid.addEventListener("click", function (event) {
  let clicked = event.target;

  if (count <= 1) {
    count++;
    clicked.classList.add("selected");
    clicked.parentNode.classList.add("gridmove");
    grid.classList.add("gridmove2");

    grid,
      addEventListener("animationend", () => {
        animate++;
        if (animate >= 3) {
          grid.classList.add("hide");
        }
      });
  }
});

document.getElementById("yl_card").animate(
  [
    // keyframes
    { transform: "translateX(-800px)" },
    { transform: "translateX(0px)" },
  ],
  {
    // timing options
    duration: 500,
    iterations: 1,
  }
);

function selectCard() {
  var selectedCard = getRandom(1, 12);
  var result = cards2[selectedCard];
  mealresult.push(1, result);
  for (var i = 1; i <= 6; i++) {
    firstmeal.push(result);
  }
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
