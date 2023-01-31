import "./styles.css";

const onCLickAdd = () => {
  // テキストボックスの値を取得し初期化する
  const inputText = document.querySelector("#add-text").value;
  document.querySelector("#add-text").value = "";

  const li = document.createElement("li");
  li.className = "list-row";
  li.innerText = inputText;
  document.querySelector(".imcomplete-area-list").appendChild(li);

  const div = document.createElement("div");
  div.className = "button-area";

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.closest(".list-row");
    deleteFromImcompleteList(deleteTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.closest(".list-row");
    deleteFromImcompleteList(deleteTarget);
  });

  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);
};

const deleteFromImcompleteList = (target) => {
  document.querySelector(".imcomplete-area-list").removeChild(target);
};

document
  .querySelector("#add-button")
  .addEventListener("click", () => onCLickAdd());
