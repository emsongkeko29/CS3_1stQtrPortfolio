// no script tag needed here

var age = prompt("Enter age","14")
var maxAge = prompt("Enter maxAge", "100")
var numPerDay = prompt("Enter the amount of times you eat your fav snacks per day", "1")

var age = 14;
var maxAge = 100;
var numPerDay = 1;
var totalRequired = (number(numPerDay) * 365 * (Number(maxAge) - Number(age)));

let name = window.prompt("Enter", "Your name");
if (confirm('Are you sure?')){
    console.log("You will need" + totalRequired + "to last until the ripe age of" + maxAge);
}

else {
    console.log("Run the code again.");
}