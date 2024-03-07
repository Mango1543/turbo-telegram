const yesBtn = document.getElementById("checkbox1")
const noBtn = document.getElementById("checkbox2")
const answerOne = document.getElementById("answerOne")
const answerTwo = document.getElementById("answerTwo")
const mySubmit = document.getElementById("mySubmit")

document.getElementById("mySubmit").onclick = function(){

    if(yesBtn.checked){
        answerOne.textContent = "You are right"
    } else if(noBtn.checked){
        answerTwo.textContent = "Perish."
    }
    else{
        answerOne.textContent = "Choose an answer pookie :)"
    }
}