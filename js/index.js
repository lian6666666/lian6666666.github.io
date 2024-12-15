var start = document.getElementById("start");
var stratimage = document.createElement("div");
var startevent = document.createElement("div");
var ylhead = document.createElement("div");
var startbtn = document.createElement("div");
var startbtna = document.createElement("a");
start.appendChild(startevent).appendChild(stratimage);
startevent.appendChild(startbtn).appendChild(startbtna);
stratimage.classList.add("startimage");
startevent.appendChild(ylhead);
ylhead.classList.add("ylhead");
ylhead.classList.add("hide");
startevent.classList.add("startevent");
startbtn.classList.add("start_btn");
startbtn.classList.add("hide");
startbtna.innerText = `點擊開始`;
startbtna.href = `./1_0.html`;

startevent.addEventListener("mouseenter", () => {
  startbtn.classList.remove("hide");
  ylhead.classList.remove("hide");
  stratimage.animate(
    [{ transform: "translateY(100px)" }, { transform: "translateY(0px)" }],
    { duration: 200, iterations: 1 }
  );
  ylhead.animate(
    [{ transform: "translateY(50px)" }, { transform: "translateY(0px)" }],
    { duration: 200, iterations: 1 }
  );
  stratimage.style.top = "calc(50vh - 350px)";
  ylhead.style.top = "calc(100vh - 258px);";
});
startevent.addEventListener("mouseleave", () => {
  startbtn.classList.add("hide");
  ylhead.classList.add("hide");
  stratimage.animate(
    [{ transform: "translateY(-100px)" }, { transform: "translateY(0px)" }],
    { duration: 200, iterations: 1 }
  );
  ylhead.animate(
    [{ transform: "translateY(-50px)" }, { transform: "translateY(0px)" }],
    { duration: 200, iterations: 1 }
  );
  stratimage.style.top = "calc(50vh - 250px)";
  ylhead.style.top = "calc(100vh - 208px);";
});
startbtna.addEventListener("mousedown", () => {
  startbtna.style.backgroundColor = "#fffbe7";
  startbtna.style.backgroundImage = "none";
});
startbtna.addEventListener("mouseup", () => {
  startbtna.style.backgroundColor = "#5c6652";
});
