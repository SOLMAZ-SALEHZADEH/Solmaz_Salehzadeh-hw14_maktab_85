let sideLeft = ["PHP", "Phython", "Rubby", "C++"];
let sideRight = ["HTML", "Css", "JavaScript", "Java"];
const sideRightList = document.getElementsByClassName("side-right")[0];
const sideLeftList = document.getElementsByClassName("side-left")[0];
const rightToAll = document.getElementsByClassName("right-to-all")[0];
const leftToAll = document.getElementsByClassName("left-to-all")[0];
const checkmarkedToRight = document.getElementsByClassName(
  "checkmarked-to-right"
)[0];
const checkmarkedToLeft = document.getElementsByClassName(
  "checkmarked-to-left"
)[0];

document.addEventListener("DOMContentLoaded", function () {
  sideRight.map((item) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.dataset.id = item;
    li.append(checkbox);
    li.append(item);
    sideRightList.append(li);
  });
  sideLeft.map((item) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.dataset.id = item;
    li.append(checkbox);
    li.append(item);
    sideLeftList.append(li);
  });
});
rightToAll.addEventListener("click", function () {
  sideLeftList.innerHTML = "";
  sideRightList.innerHTML = "";
  sideRight = [...sideRight, ...sideLeft];
  sideLeft = [];
  sideRight.map((item) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.dataset.id = item;
    li.append(checkbox);
    li.append(item);
    sideRightList.append(li);
  });
  checkDisabledButton();
});
leftToAll.addEventListener("click", function () {
  sideRightList.innerHTML = "";
  sideLeftList.innerHTML = "";
  sideLeft = [...sideRight, ...sideLeft];
  sideRight = [];
  sideLeft.map((item) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.dataset.id = item;
    li.append(checkbox);
    li.append(item);
    sideLeftList.append(li);
  });
  checkDisabledButton();
});

function checkDisabledButton() {
  sideLeft.length === 0
    ? (rightToAll.disabled = true)
    : (rightToAll.disabled = false);
  sideLeft.length === 0
    ? (rightToAll.className = "right-to-all disabled")
    : (rightToAll.className = "right-to-all");
  sideRight.length === 0
    ? (leftToAll.disabled = true)
    : (leftToAll.disabled = false);
  sideRight.length === 0
    ? (leftToAll.className = "left-to-all disabled")
    : (leftToAll.className = "left-to-all");
  sideLeft.length === 0
    ? (checkmarkedToRight.disabled = true)
    : (checkmarkedToRight.disabled = false);
  sideLeft.length === 0
    ? (checkmarkedToRight.className = "checkmarked-to-right disabled")
    : (checkmarkedToRight.className = "checkmarked-to-right");
  sideRight.length === 0
    ? (checkmarkedToLeft.disabled = true)
    : (checkmarkedToLeft.disabled = false);
  sideRight.length === 0
    ? (checkmarkedToLeft.className = "checkmarked-to-left disabled")
    : (checkmarkedToLeft.className = "checkmarked-to-left");
}

checkmarkedToRight.addEventListener("click",function(){
  const leftSideInputs = sideLeftList.getElementsByTagName("input")
  const checked = [];
  Array.from(leftSideInputs).forEach(function (element) {
    checked.push({name:element.dataset.id,checked:element.checked})
  });
  const rightToLeftItems = checked.filter(item=>item.checked === true)
  
  sideRight =[...sideRight ,...rightToLeftItems.map(item=>item.name)]
  sideLeft =[...checked.filter(item=>item.checked === false).map(item=>item.name)]
  console.log(sideRight)
  sideRightList.innerHTML = "";
  sideLeftList.innerHTML = "";
  sideLeft.map((item) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.dataset.id = item;
    li.append(checkbox);
    li.append(item);
    sideLeftList.append(li);
  });
  sideRight.map((item) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.dataset.id = item;
    li.append(checkbox);
    li.append(item);
    sideRightList.append(li);
  });
  checkDisabledButton();
})

checkmarkedToLeft.addEventListener("click",function(){
  const RightSideInputs = sideRightList.getElementsByTagName("input")
  const checked = [];
  Array.from(RightSideInputs).forEach(function (element) {
    checked.push({name:element.dataset.id,checked:element.checked})
  });
  const LeftTorightItems = checked.filter(item=>item.checked === true)
  
  sideLeft =[...sideLeft ,...LeftTorightItems.map(item=>item.name)]
  sideRight =[...checked.filter(item=>item.checked === false).map(item=>item.name)]
  // console.log(sideRight)
  sideRightList.innerHTML = "";
  sideLeftList.innerHTML = "";
  sideLeft.map((item) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.dataset.id = item;
    li.append(checkbox);
    li.append(item);
    sideLeftList.append(li);
  });
  sideRight.map((item) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.dataset.id = item;
    li.append(checkbox);
    li.append(item);
    sideRightList.append(li);
  });
  checkDisabledButton();
})