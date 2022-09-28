let AddButton = document.querySelector("#Plus")
let SubractButton = document.querySelector("#Substract")
let MultiplyButton = document.querySelector("#Multiply")
let DivideButton = document.querySelector("#Divide")
let NumberOne = document.querySelector("#Number-1")
let NumberTwo = document.querySelector("#Number-2")
let Result = document.querySelector("#Result")
let MouseOver = document.querySelector("#MouseOver")

AddButton.addEventListener('click', function() {
    console.log(JSON.parse(NumberOne.value))
    console.log(JSON.parse(NumberTwo.value))
    Result.innerHTML = (Number(NumberOne.value) + Number(NumberTwo.value))
})

SubractButton.addEventListener('click', function() {
    console.log(JSON.parse(NumberOne.value))
    console.log(JSON.parse(NumberTwo.value))
    Result.innerHTML = (Number(NumberOne.value) - Number(NumberTwo.value))
})

MultiplyButton.addEventListener('click', function() {
    console.log(JSON.parse(NumberOne.value))
    console.log(JSON.parse(NumberTwo.value))
    Result.innerHTML = Result.innerHTML = JSON.parse(NumberOne.value) * JSON.parse(NumberTwo.value) 
})

DivideButton.addEventListener('click', function() {
    console.log(JSON.parse(NumberOne.value))
    console.log(JSON.parse(NumberTwo.value))
    Result.innerHTML = JSON.parse(NumberOne.value) / JSON.parse(NumberTwo.value) 
})

MouseOver.addEventListener('mouseover', (event) => {
    console.log("Worked")
    event.target.style.color = "orange"
})

MouseOver.addEventListener('mouseout', (event) => {
    event.target.style.color = "black"
})