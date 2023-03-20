const addBtn = document.querySelector("#btn");
const input = document.querySelector("#desc");
const block = document.querySelector("#main-block");

addBtn.addEventListener("click", () => {
  if (input.value !== "") {
    block.innerHTML += `<li class="li">
    <p class="p">${input.value}</p>
    <div class="edit-div">
      <input type="text" class="edit-input">
      <button class="confirm">+</button>
      <button class="discard">X</button>
    </div>
    <div>
      <button class="done">Done</button>
      <button class="edit">...</button>
      <button class="close">X</button>
    </div>
   </li>`;
    input.value = "";

    const collection = document.querySelectorAll(".li");
    const closeBtns = document.querySelectorAll(".close");
    removeTask(collection, closeBtns);

    const editBtns = document.querySelectorAll(".edit");
    const editBlocks = document.querySelectorAll(".edit-div");
    openEdit(editBtns, editBlocks);

    const editInputs = document.querySelectorAll(".edit-input");
    const prs = document.querySelectorAll(".p");
    const confirmBtns = document.querySelectorAll(".confirm");
    const discardBtns = document.querySelectorAll(".discard");
    editTask(editInputs, confirmBtns, prs, discardBtns, editBlocks);

    const doneBtns = document.querySelectorAll(".done");
    doneTask(doneBtns, collection);
  } else {
    input.placeholder = 'Type Something'
  }
});

function removeTask(collection, closeBtns) {
  closeBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      collection[index].remove();
    });
  });
}

function openEdit(editBtns, editBlocks) {
  editBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      editBlocks[index].style.display = "flex";
    });
  });
}

function editTask(editInputs, confirmBtns, prs, discardBtns, editBlocks) {
  confirmBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      prs[index].innerHTML = editInputs[index].value;
      editInputs[index].value = "";
    });
  });

  discardBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      editBlocks[index].style.display = "none";
    });
  });
}

function doneTask(doneBtns, collection) {
  doneBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      collection[index].style.backgroundColor = "green";
    });
  });
}
