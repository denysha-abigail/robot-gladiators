// Prompt user for robot name
var playerName = window.prompt("What is your robot's name?");
// Establish iniital health and attack points
var playerHealth = 100;
var playerAttack = 10;

// Log name, attack points, and health points in console
console.log(playerName, playerHealth, playerAttack);

// Establish opponent name, health points, and attack points
/* Holds string data type */
var enemyName = "Roborto"
/* Holds number data type */
var enemyHealth = 50;
var enemyAttack = 12;

// Create a function named "fight"
var fight = function () {
// Alert players that they're starting the round
    window.alert("Welcome to Robot Gladiators!");
}

fight();

// Subtract the value of 'playerAttack' from the value of 'enemyHealth', and use that result to update the value in the 'enemyHealth' variable.

enemyHealth = enemyHealth - playerAttack;

// Log a resulting message to the console to confirm that it worked.

console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

// Check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}

// Subtract the value of 'enemyAttack' from the value of 'playerHealth', and use that result to update the value in the 'playerHealth' variable.

playerHealth = playerHealth - enemyAttack;

// Log a resulting message to the console to confirm that it worked.

console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

// Check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
}
else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
}

