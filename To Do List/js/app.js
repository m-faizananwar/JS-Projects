const item = document.querySelector("#item")
const toDoBox = document.querySelector("#to-do-box")

item.addEventListener(
    "keyup",
    function(event) {
        if (event.key == "Enter") {
            addToDo(this.value)
            this.value = ""
        }
    }
)

const addToDo = (item, save = true) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
         ${item}
        <i class="fas fa-times"></i>
    `;

    listItem.addEventListener(
        "click",
        function() {
            this.classList.toggle("done");
            saveToLocalStorage();
        }
    )
    listItem.querySelector("i").addEventListener(
        "click",
        function() {
            listItem.remove();
            saveToLocalStorage();
        }
    )
    toDoBox.appendChild(listItem)
    if (save) saveToLocalStorage();
}

const saveToLocalStorage = () => {
    const items = [];
    toDoBox.querySelectorAll("li").forEach(li => {
        items.push({
            text: li.innerText,
            done: li.classList.contains("done")
        });
    });
    localStorage.setItem("toDoItems", JSON.stringify(items));
}

const loadFromLocalStorage = () => {
    const items = JSON.parse(localStorage.getItem("toDoItems")) || [];
    items.forEach(item => {
        addToDo(item.text, false);
        if (item.done) {
            toDoBox.lastChild.classList.add("done");
        }
    });
}

document.addEventListener("DOMContentLoaded", loadFromLocalStorage);