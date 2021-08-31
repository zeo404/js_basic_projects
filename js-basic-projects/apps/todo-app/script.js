// Add new task
const newTask = document.querySelector("input");
const addTask = document.querySelector(".add-task");

addTask.addEventListener("click", function (e) {
  var li = "<li>" + newTask.value + "</li>";
  document.querySelector("ul").insertAdjacentHTML("beforeend", li);
});

// Draw on task item
const liElement = document.querySelectorAll("li");
for (let i = 0; i < liElement.length; i++) {
  liElement[i].addEventListener("click", function () {
    this.style.textDecoration = "line-through";
  });
}

// Delete all task items
const deleteAll = document.querySelector(".delete-all");
const ulElemet = document.querySelector("ul");
deleteAll.addEventListener("click", function () {
  if (confirm("Hepsini silmek istiyormusunuz?")) {
    ulElemet.innerHTML = "";
  }
});
