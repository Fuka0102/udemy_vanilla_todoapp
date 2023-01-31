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
    alert("完了");
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.closest(".list-row");
    document.querySelector(".imcomplete-area-list").removeChild(deleteTarget);
  });

  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);
};

document
  .querySelector("#add-button")
  .addEventListener("click", () => onCLickAdd());
