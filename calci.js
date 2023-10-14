function turnOff(){

    let inputField =document.getElementById("inputField")
    inputField.style.visibility="hidden"
}
function turnOn(){

    let inputField =document.getElementById("inputField")
    inputField.style.visibility="visible"
}
function getValues(num){
let inputValue=document.getElementById("inputValue")
inputValue.value=inputValue.value+num
}
function clearOneChar(){
    inputValue.value=inputValue.value.slice(0,-1) 
}
function clearAll(){
    inputValue.value =" "
}
function calculate(){
    inputValue.value=eval(inputValue.value)
}