// DOM Elements
const todoForm = document.getElementById("todo-form");
const inputTitle = document.getElementById("title");
const listContainer = document.getElementById("list-container");

// Variables and Arrays
let list = [
  {
    title: "My New Task 1",
    date: new Date(),
    done: false,
  },
  {
    title: "My New Task 2",
    date: new Date(),
    done: false,
  },
];

// Functions
// Function 1 - To read list and render list container
const renderListContainer = () => {
  listContainer.innerHTML = list
    .map(
      (task, index) =>
        `<li ${task.done && `class="done"`} onClick="clicked(${index})">
            <span>${index + 1} : ${task.title}</span>
            <span>${task.date}</span>
            <span><button onClick="deleteTask(${index})">x</button></span>
        </li>`
    )
    .join("");
};

// Function 2 - To Delete task
const deleteTask = (inputIndex) => {
  list = list.filter((task, taskIndex) => taskIndex != inputIndex);
  renderListContainer();
};

// Function 3 - Task Done
const clicked = (inputIndex) => {
  console.log("clicked");
  list = list.map((task, taskIndex) =>
    taskIndex == inputIndex ? { ...task, done: !task.done } : task
  );
  renderListContainer();
};

// Event Listener
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputTitle.value.trim() === "") {
    alert("Title should not be empty.");
  } else {
    list.push({
      title: inputTitle.value.trim(),
      date: new Date(),
      done: false,
    });
    inputTitle.value = "";
    renderListContainer();
  }
});

// Init App
renderListContainer();
