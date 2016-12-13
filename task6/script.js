
var rand =Math.round ( Math.random() * 100);
  while(rand!=a){
  var a = prompt("Guess the number, if you want to game over just click OK", "");
  if (!a) break;
  
  if (rand > a) {
    alert('Our number is higher, try again');
  }
  if  (rand < a ) {
    alert('Our number is lower, try again');
  }
  if (rand == a) {
    alert('Congrats! You are winner! Number = ' + a);
  }
}
  


  


