const list = document.querySelector("ul");

const input = document.querySelector("input")

const button= document.querySelector("button")

button.addEventListener("click", () => {
    const newTextItem = input.value;
    input.value = "";

    const newItem = document.createElement("li");
    const newSpan = document.createElement("span")
    const newButton = document.createElement("button")

    newItem.appendChild(newSpan);
    newItem.appendChild(newButton);

    newSpan.textContent = newTextItem;
    newButton.textContent = "Delete";

    list.appendChild(newItem);

    newButton.addEventListener("click", () => {
        list.removeChild(newItem);
        
    });

    input.focus();

});
  
  
  
  

