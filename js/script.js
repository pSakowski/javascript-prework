function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  }
  else if(argMoveId == 2){
    return 'papier';
  }
  else if(argMoveId == 3){
    return 'nożyce';
  }
  return 'nieznany ruch';
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/* if(randomNumber == 1){
  computerMove = 'kamień';
}

else if(randomNumber ==2){
    computerMove = 'papier';
}

else if(randomNumber ==3){
    computerMove = 'nożyce';
} */

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);


/* if(playerInput == '1'){
  playerMove = 'kamień';
}

else if(playerInput == '2'){
    playerMove = 'papier'
}

else if(playerInput == '3'){
    playerMove = 'nożyce'
} */

printMessage('Twój ruch to: ' + playerMove);


function displayResult(argComputerMove, argPlayerMove){
  console.log('Komputer wybrał:', argComputerMove, 'Gracz wybrał:', argPlayerMove);
  if((argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
     (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') ||
     (argComputerMove == 'papier' && argPlayerMove == 'nożyce')){
      printMessage('Ty wygrywasz!');
  }
  else if (argComputerMove == argPlayerMove){
    printMessage('Remis!');
  } 
  else {
    printMessage('Ty przegrywasz!');
  }
}

displayResult(computerMove, playerMove); 

console.log('Wynik gry: ', randomNumber, playerInput);