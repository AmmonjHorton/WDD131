
function newTask() {
  const listElement = document.querySelector("#todoList"); // I literally just spent way to long trying to find the typo in this line


  
  // get the value entered into the #todo input
  const task = document.querySelector("#todo").value;
  // render out the list 
  listElement.innerHTML += `
  <li> ${task}
  <div>
  <span data-function="delete">❎</span>
  <span data-function="complete">✅</span>
  </div>
  </li>`;
}

function manageTasks(e) {
    console.log(e);
  const parent = e.target.closest("li");
  if (e.target.getAttribute('data-function') === "delete") {
      parent.remove();
    }
  if (e.target.getAttribute('data-function') === "complete") {
    parent.classList.toggle('strike');
    }
}

document.querySelector('#submitTask').addEventListener('click', newTask);
document.querySelector('#todoList').addEventListener('click', manageTasks);
