function onReady() {
  let id = 0;
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');


  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: ++id
    });

    newToDoText.value = '';

    // need to increment id ??
      // ++id;

    renderTheUI();
  }

  function deleteToDo(id) {
    const toDoList = toDoList.filter(toDo => toDo.id < 1);
    renderTheUI();
  }


  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

// adding delete button
      const button = document.createElement('button');
      button.type = "button";
      button.textContent = "Delete";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(button);
    });
  }


  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });


  button.addEventListener('submit', event => {
    event.preventDefault();
    // const result = toDoList.filter(toDo => toDo.id < 1);
    // renderTheUI();
    deleteToDo();
  });

  renderTheUI();
}


window.onload = function() {
  onReady();
};
