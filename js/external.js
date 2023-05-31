"use strict"

console.log("Hello from external Javascript");

alert('Welcome to my Website!');
let userInput = prompt("What is your favorite color?");
console.log(userInput);

let userFavoriteColor = alert("Great, " + userInput + " is my favorite color too!");
console.log(userFavoriteColor);


// Question #3.a ----------------------

let pricePerDayDollars = 3;
let littleMermaidDaysRented = 3;
let brotherBearDaysRented = 5;
let herculesDaysRented = 1;
price = pricePerDayDollars * (littleMermaidDaysRented + brotherBearDaysRented + herculesDaysRented);
console.log(price)

let dailyRentalRateDollars;
let littleMermaidDaysRented =  prompt ("How many days have you rented?")
let brotherBearDaysRented = prompt ("How many days have you rented?")
let herculesDaysRented = prompt ("How many days have you rented?")
let totalRentalCost;
totalRentalCost = (littleMermaidDaysRented + brotherBearDaysRented + herculesDaysRented) * 3
console.alert(totalRentalCost);

// Questions #3.b -----------------

//hourly pay for each company
let googlePayDollars = 400;
let amazonPayDollars = 380;
let facebookPayDollars = 350;
//hours worked for each company
let facebookHoursWorked = prompt("how many hours did you work for FaceBook this week");
let googleHoursWorked = prompt("How many hours did you work for Google this week");
let amazonHoursWorked = prompt("How many hours did you work for Amazon this week?");
//calculate the paycheck for the week
let paycheck = (parseInt(googleHoursWorked)*googlePayDollars) + (parseInt(amazonHoursWorked)*amazonPayDollars) + (parseInt(facebookHoursWorked)*facebookPayDollars);
console.log("Exercise 3.2: Your paycheck for the week is $" + paycheck + "!");
alert("Exercise 3.2: Your paycheck for the week is $" + paycheck + "!");

/*
 Question #3.c -----------------
 A student can be enrolled in a class only if the class is
 not full and the class schedule does not conflict with her current schedule.
*/

//requirements to attend class
let classFull = confirm("Is this class full?");
let freeSchedule = confirm("Is your schedule free?");
//check if class may be attended
if(classFull == false && freeSchedule == true){
    console.log("Exercise 3.3: You may attend Class!");
    alert("Exercise 3.3: You may attend Class!");
} else {
    console.log("Exercise 3.3: No class for you...");
    alert("Exercise 3.3: No class for you...");
};

/*
 Question #3.d ----------------------
 A product offer can be applied only if a person buys more than 2 items,
 and the offer has not expired. Premium members do not need to buy a specific amount of products.
*/

let numberOfItems; // number
let offerIsValid; // boolean
let isPremiumMember; // boolean
let userBuyResponse;
let productDiscountApplied = offerIsValid && (isPremiumMember || numberOfItems > 2);
userExpiredResponse = confirm("Is the item expired?");
if  (userExpiredResponse === false) {
    alert("Thank you. Please answer the next question.");
    userBuyResponse = prompt("How many items are you buying?");
    userBuyResponse = parseInt(userBuyResponse);
    if (userBuyResponse >= 2) {
        alert("The item is valid for discount!");
    } else {
        alert("The item is not valid for discount.");
    }
} else {
    alert("The item does not qualify for the discount.");
}