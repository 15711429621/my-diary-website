const input = document.getElementById("noteInput");
const saveBtn = document.getElementById("saveBtn");
const list = document.getElementById("noteList");

// 读取本地存储内容
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// 渲染内容
function renderNotes() {
  list.innerHTML = "";
  notes.forEach(text => {
    const div = document.createElement("div");
    div.className = "note-item";
    div.innerText = text;
    list.appendChild(div);
  });
}

// 保存按钮事件
saveBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;

  notes.unshift(text); // 添加到数组最前面
  localStorage.setItem("notes", JSON.stringify(notes)); // 保存到本地
  input.value = ""; // 清空输入框
  renderNotes(); // 刷新页面显示
});

