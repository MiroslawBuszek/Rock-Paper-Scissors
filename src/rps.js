const getUserChoice = userInput => {
  
    if(userInput === 'rock'){
      return userInput
    }
    else if(userInput === 'paper'){
      return userInput
    }
    else if(userInput === 'scissors'){
      return userInput
    }
    else{
      cosnole.log('Error')
    }
    
  }
  
  console.log(getUserChoice('paper'));