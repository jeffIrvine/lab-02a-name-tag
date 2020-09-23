const nameVal = document.getElementById("name-val");
// console.log(nameVal)
const nameInput = document.getElementById("name-input");
const myButton = document.getElementById("name-button");
// console.log(myButton)

myButton.addEventListener("click", () => {
    const userInput = nameInput.value;
    // console.log(userInput.value);
    nameVal.textContent = userInput;

    nameInput.value = '';
});