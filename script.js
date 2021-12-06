const submitButton = document.getElementById("submit");
const value = document.getElementById("inputName");
const list = document.getElementById("unorderedList");

function updateList() {
    if(localStorage.getItem("list")==null)
        return;
    currList = JSON.parse(localStorage.getItem("list"));
    while(list.hasChildNodes())
        list.removeChild(list.childNodes[0]);
    currList.forEach(element => {
        const tempItem = document.createElement("li");
        tempItem.innerText = element;
        list.appendChild(tempItem);
    });
}

submitButton.addEventListener("click", function() {
    const val = value.value;
    if(localStorage.getItem("list")==null) {
        const tempList = [val];
        localStorage.setItem("list", JSON.stringify(tempList));
    } else {
        const currList = JSON.parse(localStorage.getItem("list"));
        currList.push(val);
        localStorage.setItem("list", JSON.stringify(currList));
    }
    updateList();
    console.log(list);
})

updateList();