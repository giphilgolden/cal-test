let AddButton = document.querySelector("#Plus")
let SubractButton = document.querySelector("#Subtract")
let MultiplyButton = document.querySelector("#Multiply")
let DivideButton = document.querySelector("#Divide")
let NumberOne = document.querySelector("#Number-1")
let NumberTwo = document.querySelector("#Number-2")
let Result = document.querySelector("#Result")

AddButton.addEventListener('click', function() {
    Result.innerHTML = (Number(NumberOne.value) + Number(NumberTwo.value))
})