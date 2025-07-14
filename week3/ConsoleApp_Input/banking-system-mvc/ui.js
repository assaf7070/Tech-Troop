const prompt = require('prompt-sync')();

function displayMenu() {
    console.log("\n=== Banking System ===");
    console.log("1) Check Balance");
    console.log("2) Deposit Money");
    console.log("3) Withdraw Money");
    console.log("4) Exit");
}

function getMenuChoice() {
    let choice;
    while (true) {
        choice = parseInt(prompt("Choose option (1-4): "));
        if (choice >= 1 && choice <= 4) break;
        console.log("Invalid input. Please enter a number between 1 and 4.");
    }
    return choice;
}

function getAmountInput(action) {
    let amount;
    while (true) {
        amount = parseFloat(prompt(`Enter amount to ${action}: $`));
        if (!isNaN(amount) && amount > 0) break;
        console.log("Please enter a valid positive number.");
    }
    return amount;
}

module.exports = {
    displayMenu,
    getMenuChoice,
    getAmountInput
};
