import "./styles.css";

const onCLickAdd = () => {
  // テキストボックスの値を取得し初期化する
  const inputText = document.querySelector("#add-text").value;
  document.querySelector("#add-text").value = "";

  const li = document.createElement("li");
  li.className = "list-row";
  li.innerHTML = `<span>${inputText}</span>`;
  document.querySelector(".imcomplete-area-list").appendChild(li);

  const div = document.createElement("div");
  div.className = "button-area";

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  const backButton = document.createElement("button");
  backButton.innerText = "戻す";

  completeButton.addEventListener("click", () => {
    const addTarget = completeButton.closest(".list-row");
    deleteFromImcompleteList(addTarget);

    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;

    const li = document.createElement("li");
    li.className = "list-row";
    li.innerHTML = `<span>${text}</span>`;

    const div = document.createElement("div");
    div.className = "button-area";

    div.appendChild(backButton);
    li.appendChild(div);

    document.querySelector(".complete-area-list").appendChild(li);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.closest(".list-row");
    deleteFromImcompleteList(deleteTarget);
  });

  backButton.addEventListener("click", () => {
    const backTarget = backButton.closest(".list-row");
    document.querySelector(".complete-area-list").removeChild(backTarget);

    const text = backTarget.firstElementChild.innerText;
    backTarget.textContent = null;

    const li = document.createElement("li");
    li.className = "list-row";
    li.innerHTML = `<span>${text}</span>`;

    const div = document.createElement("div");
    div.className = "button-area";

    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div);

    document.querySelector(".imcomplete-area-list").appendChild(li);
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
