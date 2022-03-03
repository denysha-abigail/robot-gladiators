// Game States
// "WIN" - Players robot has defeated all enemy-robots
//      * Fight all enemy-robots
//      * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less


// Prompt user for robot name
var playerName = window.prompt("What is your robot's name?");
// Establish iniital health and attack points
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// Establish opponent name, health points, and attack points
/* Holds string data type */
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
/* Holds number data type */
var enemyHealth = 50;
var enemyAttack = 12;

// Create a function named "fight"
var fight = function (enemyName) {
// Repeat and execute as long as the enemy-robot is alive
    while(enemyHealth > 0) {
// Prompt to player to choose whether to fight or skip
// [if], [else if], and [else] keywords have code choose one of three directions to go. The direction is based on the value of the variable [promptFight]
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // If player chooses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {
    // Remove enemy's health by subtracting the amount set in the 'playerAttack' variable
            enemyHealth = enemyHealth - playerAttack;
            console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

    // Check enemy's health
        if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

    // Remove player's health by subtracting the amount set in the 'enemyAttack' variable
            playerHealth = playerHealth - enemyAttack;
            console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

    // Check player's health
        if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

    // If player chooses to skip
        } else if (promptFight === "skip" || promptFight === "SKIP") {

    // Confirm players wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // If yes (true), leave fight
    // If user clicks OK, the Boolean value (true) is returned and stored in the [confirmSkip] variable
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");

    // Subtract money from the playerMoney for skipping
    playerMoney = playerMoney - 2;
    }
    
    // If no (false), ask question again by running fight() again
        } else {
            fight();
        }
    }
}

// For loop
for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}

// fight();


