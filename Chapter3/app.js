
const todoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");

addButton.addEventListener("click", function(){
    //a.inputni入力されたTextを取得する
    const todoText = todoInput.ariaValueMax;
    //入力が空の場合は何もしない
    if(todoText ==="") return;

    //b.li要素の作成
    const newTodoItem = document.createElement("li");

    //c.<li> 要素のTextをaで取得したTextに設定する
    newTodoItem.textContent = todoText;

    //d. li要素の追加
    todoList.appendChild(newTodoItem);

    //e. inutを空にする
    todoInput.value= "";
});
