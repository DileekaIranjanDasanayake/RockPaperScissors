document.addEventListener('DOMContentLoaded', ()=>{
  let computerSelection = ""
  let playerSelection = ""
  let result = ""
  let computerScore = 0
  let playerScore = 0
  let randomNumber = 0
  let score = []
  let playerResult = 0
  let computerResult = 0
  let buttons = document.querySelectorAll('button').forEach(button => {
    button.onclick = () => {
      playerSelection = button.innerText.toLowerCase()
      alert(playerSelection)
      computerSelection = getComputerChoice().toLowerCase()
      console.log(`computer selection :${computerSelection}`)
      result = round(playerSelection,computerSelection)
      score = getScores(result)
      console.log(`round result is: ${result}`)

      playerResult = playerResult + score[0]
      computerResult = computerResult + score[1]
      console.log(`playerResult: ${playerResult}`)
      console.log(`compueter Result: ${computerResult}`)
      let playerScore = document.querySelector('.playerScore')
      let computerScore = document.querySelector('.computerScore')
      playerScore.innerText = playerResult 
      computerScore.innerText = computerResult 

      //deciding winner
      if(playerResult === 5){
        alert(`congratulations you won! your result is ${playerResult}`)
        return
      }else if(computerResult === 5){
        alert(`Opps You Lost!, May Be another time. your score is ${playerResult}`)
        return
      }
    }
  })

  //generate computer choice
  function getComputerChoice(){
   randomNumber = Math.floor(Math.random()*3) + 1
    if(randomNumber === 1){
      return "rock"
    }else if(randomNumber === 2) {
      return "paper"
    }else if(randomNumber === 3) {
      return "scissor"
    }
  }

  function round(playerChoice, computerChoice){
    if(playerChoice === "rock" && computerChoice === "paper"){
      return "lost"
    }else if(playerChoice === "rock" && computerChoice === "scissor"){
      return "won"
    }else if(playerChoice === "paper" && computerChoice === "scissor"){
      return "lost"
    }else if(playerChoice === "paper" && computerChoice === "rock"){
      return "won"
    }else if(playerChoice === "scissor" && computerChoice === "rock"){
      return "lost"
    }else if(playerChoice === "scissor" && computerChoice === "paper"){
      return "won"
    }else if(playerChoice === computerChoice){
      return "tied"
    }
  }

  //get each score
  function getScores(aScore){
    let computerTotal = 0
    let playerTotal = 0
    if(aScore.toLowerCase() === "lost"){
      computerTotal++
    }else if(aScore.toLowerCase() === "won"){
      playerTotal++
    }
    return [playerTotal, computerTotal]
  }
}) 
