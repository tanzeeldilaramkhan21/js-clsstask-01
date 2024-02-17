// Welcome Message:
//Create a function called displayWelcomeMessage that prompts the user to enter their name and then displays a personalized welcome message such as "Welcome, [name]!" in an alert.
//solution 
//function displayWelcomeMessage(){
 //   let userName = prompt("please enter your name");
  //  alert (" Welcome " +  userName + "!");
//}
//displayWelcomeMessage();

//Quote Generator: 
//Create a function called  generateQuote that randomly selects and returns a quote from an array of predefined quotes. Call this function to display a random quote on the webpage.
// solution
//let quotations = ["Each day comes bearing its gifts. Untie the ribbon.","Friends are the family we choose.","Always let your conscience be your guide.","Be yourself. everyone else is already taken.","Setting goals is the first step in turning the invisible into the visible."]
//console.log(quotations);
//function   generateQuote(){
//let  randomIndex = Math.floor(Math.random() * quotations.length);
//console.log(randomIndex);
//let randomQuotation = quotations[randomIndex];
//alert (randomQuotation);
//console.log(randomQuotation);
//}  
//generateQuote();

// Random Number Generator: 
// Write a function called generateRandomNumber that generates and returns a random number between 1 and 100. Call this function and display the generated random number on the webpage.
// solution
function  generateRandomNumber (){
    let randomNumber = Math.floor(Math.random()*100 + 1);
    console.log(randomNumber);
    alert(randomNumber);
}
generateRandomNumber();