{
  const playGame = function (playerInput){
  clearMessages();

  function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2){
      return 'papier';
    } else if(argMoveId == 3){
      return 'nożyce';
    } return 'nieznany ruch';
  }

  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana liczba to: ' + randomNumber);

  const computerMove = getMoveName(randomNumber);
  printMessage('Mój ruch to: ' + computerMove);
  console.log('Gracz wpisał: ' + playerInput);

  const playerMove = getMoveName(playerInput);
  printMessage('Twój ruch to: ' + playerMove);

  const displayResult = function (argComputerMove, argPlayerMove){
    console.log('Komputer wybrał:', argComputerMove, 'Gracz wybrał:', argPlayerMove);
    if((argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
      (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') ||
      (argComputerMove == 'papier' && argPlayerMove == 'nożyce')){
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == argPlayerMove){
      printMessage('Remis!');
    } else {
      printMessage('Ty przegrywasz!');
    }
  }
  
  displayResult(computerMove, playerMove);
}


document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});
}