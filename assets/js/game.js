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
// Repeat and execute as long as the enemy-robot is alive.
    while(playerHealth > 0 && enemyHealth > 0) {
// Prompt to player to choose whether to fight or skip
/* [if], [else if], and [else] keywords have code choose one of three directions to go. The direction is based on the value of the variable [promptFight] */

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // If player chooses to skip, confirm and stop loop
    if (promptFight === "skip" || promptFight === "SKIP") {

    // Confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // If yes (true), leave fight
    /* If user clicks OK, the Boolean value (true) is returned and stored in the [confirmSkip] variable */
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
    // Subtract money from the playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
            }
    }

    // Remove enemy's health by subtracting the amount set in the 'playerAttack' variable
            enemyHealth = enemyHealth - playerAttack;
            console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

    // Check enemy's health
        if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");

    // Award player money for skipping
        playerMoney = playerMoney + 20;
    // Leave while() loop since enemy is dead
        break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

    // Remove player's health by subtracting the amount set in the 'enemyAttack' variable
            playerHealth = playerHealth - enemyAttack;
            console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

    // Check player's health
        if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    // Leave while() loop if player is dead
        break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }// End of while loop
}; // End of fight function

// For loop
for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}

// fight();


