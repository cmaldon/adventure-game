function playGame() {
	var enterStore = confirm("You have arrived at the grocery store.  Do you want to go inside?");

if (enterStore == true) {
  var cookiesChoice = prompt("You decide to enter the Grocery Store and you find some delicious boxes of cookies.  Do you try box 1, 2 or 3?");

  if (cookiesChoice == 1) {
    alert("The cookies are high in saturated fat! The End.");
  } else if (cookiesChoice == 2) {
    alert("The cookies have gluten! The End.");
  } else {
    alert("These cookies are just right!");

    var drinkChoice = prompt("You walk down the aisle and go to the refrigerator section in the back of the store and see three drinks.  1 - Lemonade, 2 - soda, and 3 - iced tea.  Which one do you choose?");
    if (drinkChoice == 1) {
      alert("This drink has too much acid! The End.");
    } else if (drinkChoice == 2) {
      alert("This drink has too much sugar! The End.");
    } else {
      alert("This one is just right... ");
    
    var candyChoice = prompt("You are ready to checkout, you head to the checkout lanes and see three candies, 1 - Kinder, 2 - Skittles, and 3 - M&M's.  Which one do you choose?");
  if (candyChoice == 1) {
    alert("This candy was made in China! The End.");
  } 
  else if (candyChoice == 2) {
    alert("This candy sticks to your teeth! The End.");
  } 
  else {
    alert("This one is just right... ");
    alert("Congratulations! You made it out of the Grocery Store alive and you made the healthiest food choices!");
   } 
  }
} 

}

else {
  alert("You don't go into the store.  That's all Folks.  The End.");
}

var playAgain = confirm("Do you want to play again?");
if(playAgain == true) {
playGame();
}

}

playGame();