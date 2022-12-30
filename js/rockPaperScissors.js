document.addEventListener('DOMContentLoaded', ()=>{


  let playerValue= ''
  let computerValue = '';
  let result = '';
  const buttons = ["Rock","Paper","Scissor"]
  let random = ''
  let word = ''
  const nButtons = 3
  let resultHeading = ''
  let computerChoiceHeading = ''
  let score = []
  let playerResult = 0
  let computerResult = 0
  for(let i = 0; i<nButtons; i++ ){
    random = Math.floor(Math.random()*(buttons.length-1))+1
    word = buttons[random]
    const newButton = document.createElement('button')
    newButton.innerText=buttons[i]
    document.body.appendChild(newButton)
  }
  let Mybuttons = document.querySelectorAll('button')
  Mybuttons.forEach(i=>{
    i.addEventListener('click',(e)=>{
      playerValue= e.target.innerText
      computerValue = getComputerChoice().toUpperCase();
      result = round(playerValue.toUpperCase(),computerValue);
      console.log(playerValue)
      console.log(computerValue)
      console.log(`This is the result: "${result}"`);
      computerChoiceHeading= document.createElement('h1')
      computerChoiceHeading.innerHTML=`Computer Choice: ${computerValue}`
      document.body.appendChild(computerChoiceHeading)

      resultHeading = document.createElement('h1')
      resultHeading.innerHTML=`Result: ${result}`
      document.body.appendChild(resultHeading)

      score = getScore(result)
      console.log(score[0])
      console.log(score[1])
      playerResult = playerResult + score[1]
      computerResult= computerResult + score[0]
      console.log(playerResult)
      console.log(computerResult)
      if(playerResult === 5){
        alert(`Congratulations you've won, your score is ${playerResult}`)
        return
      }else if(computerResult === 5){
        alert(`You Lost, your score is ${playerResult}`)
        return
      }
    })
  })
 function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;

    if (number === 1) {
        return "rock";
    }else if (number === 2) {
        return "paper";
    }else {
        return "scissor";
    }

}
function round(playerSelection, computerChoice) {
    if (playerSelection == "ROCK" && computerChoice == "PAPER") {
        return "You lost";
    } else if  (playerSelection == "ROCK" && computerChoice == "SCISSOR"){
        return "You won";
    } else if  (playerSelection == computerChoice){
        return "Tied";
    }
    if(playerSelection == "SCISSOR" && computerChoice == "ROCK") {
        return "You lost";
    } else if  (playerSelection == "SCISSOR" && computerChoice == "PAPER"){
        return "You won";
    } else if  (playerSelection == computerChoice){
        return "Tied";
    }
    if(playerSelection == "PAPER" && computerChoice == "SCISSOR") {
        return "You lost";
    } else if  (playerSelection == "PAPER" && computerChoice == "ROCK"){
        return "You won";
    } else if  (playerSelection == computerChoice){
        return "Tied";
    }
}

  function getScore(aScore){
    let computerTotal = 0
    let playerTotal = 0
    if(aScore.toUpperCase() === "YOU LOST"){
      computerTotal++
    }else if(aScore.toUpperCase() === "YOU WON"){
      playerTotal++
    }
    return [computerTotal, playerTotal]
  }
})









