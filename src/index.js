import "./styles.css";

const onCLickAdd = () => {
  // テキストボックスの値を取得し初期化する
  const inputText = document.querySelector("#add-text").value;
  document.querySelector("#add-text").value = "";

  const li = document.createElement("li");
  li.className = "list-row";
  li.innerText = inputText;
  document.querySelector(".imcomplete-area-list").appendChild(li);
};

document
  .querySelector("#add-button")
  .addEventListener("click", () => onCLickAdd());
