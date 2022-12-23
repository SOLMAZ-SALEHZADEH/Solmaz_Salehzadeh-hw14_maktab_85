const form = document.getElementById("form");
// const todos =[]
let todos = [];
window.localStorage.setItem('todos', JSON.stringify(todos));
let todosList = JSON.parse(window.localStorage.getItem("todos"));

const addNewTodo = (event) => {
  event.preventDefault();
  const formInputs = form.getElementsByTagName("input");
  const todoObj = {};
  Array.from(formInputs).forEach(function (element) {
    todoObj[element.name] = element.value;
  });
  todoObj["status"] = "todo";
  Array.from(formInputs).forEach(function (element) {
    element.value = "";
  });
  todosList.push(todoObj);
  window.localStorage.setItem("todos", JSON.stringify(todosList));
  todos = JSON.parse(window.localStorage.getItem("todos"));
  todosList = JSON.parse(window.localStorage.getItem("todos"));
  document.getElementById("todo").innerHTML = "";
  document.getElementById("inProgress").innerHTML = "";
  document.getElementById("done").innerHTML = "";
  todosList.map((todo) => addCardToDom(todo));
};

const addCardToDom = (cardData) => {
  const card = document.createElement("div");
  card.className = "card";

  const header = document.createElement("div");
  header.className = "header";

  const title = document.createElement("P");
  title.className = "title";
  title.innerText = cardData.title;

  const closeIcon = document.createElement("span");
  closeIcon.dataset.id = cardData.title;
  closeIcon.className = "close";

  header.append(title);
  header.append(closeIcon);

  const start = document.createElement("p");
  start.innerText = "start :";
  const startSpan = document.createElement("span");
  startSpan.innerText = cardData.date;
  start.append(startSpan);
  const end = document.createElement("p");
  end.innerText = "end :";
  const endSpan = document.createElement("span");
  endSpan.innerText = cardData.date;
  end.append(endSpan);

  card.append(header);
  card.append(start);
  card.append(end);

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "buttonContainer";

  const infoBotton = document.createElement("button");
  infoBotton.value = "description";
  infoBotton.innerText = "!";

  const select = document.createElement("select");
  select.dataset.id = cardData.title;

  select.addEventListener("change", function (e) {
    console.log(e.target.dataset.id);
    changeStatusHandler(e);
  });

  select.innerHTML = `
  <option>status</option>
  ${
    cardData.status === "done"
      ? null
      : `
  <option value="inProgress" ${
    cardData.status === "todo" ? null : "disabled"
  }>in progress</option>
<option value="done" ${
          cardData.status === "todo" ? "disabled" : null
        }>done</option>`
  }`;
  buttonContainer.append(infoBotton);
  buttonContainer.append(select);
  card.append(buttonContainer);

  if (cardData.status === "todo") {
    document.getElementById("todo").append(card);
  } else if (cardData.status === "inProgress") {
    document.getElementById("inProgress").append(card);
  } else {
    document.getElementById("done").append(card);
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  todosList.map((todo) => addCardToDom(todo));
});

const changeStatusHandler = (e) => {
  const todo = todosList.find((item) => item.title == e.target.dataset.id);
  todo.status = e.target.value;
  window.localStorage.setItem("todos", JSON.stringify(todosList));
  todosList = JSON.parse(window.localStorage.getItem("todos"));
  document.getElementById("todo").innerHTML = "";
  document.getElementById("inProgress").innerHTML = "";
  document.getElementById("done").innerHTML = "";
  todosList.map((todo) => addCardToDom(todo));
};
