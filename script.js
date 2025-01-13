let listContainer = document.querySelector("ul");
let addButton = document.querySelector("#btn");
let input = document.querySelector("#input-box");
let cancelButton = document.querySelector("span");
function addItem() {
    if (input.value != '') {
        let listItem = document.createElement("li");
        listItem.innerText = input.value;
        listContainer.appendChild(listItem);
        let spanItem = document.createElement("span");
        spanItem.innerHTML = "&#215"
        listItem.appendChild(spanItem);
        listItem.addEventListener("click", (e) => {
            doneItem(e);            
        });
        spanItem.addEventListener("click", (e) => {
            deleteItem(listItem);
        });
        input.value = ''
    } else {
        alert("Please write something valid")
    }

}
function deleteItem(e) {
    if(e)e.remove();
    else{
        console.log("not  foind")
    }
}
function doneItem(e) {
    e.target.classList.add("unactive")
}
addButton.addEventListener("click", addItem);
doneButton = document.querySelectorAll("li");
crossButton = document.querySelectorAll("span");


input.addEventListener('keydown', (event) => {
    if (event.key === "Enter") addItem();
});




