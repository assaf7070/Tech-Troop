const banking = require('./banking');
const ui = require('./ui');

function handleChoice(choice) {
    switch (choice) {
        case 1:
            console.log(`Current Balance: $${banking.getBalance()}`);
            break;
        case 2:
            const depositAmount = ui.getAmountInput("deposit");
            const depositResult = banking.deposit(depositAmount);
            console.log(depositResult.msg);
            break;
        case 3:
            const withdrawAmount = ui.getAmountInput("withdraw");
            const withdrawResult = banking.withdraw(withdrawAmount);
            console.log(withdrawResult.msg);
            break;
        case 4:
            console.log("Thank you for using our banking system. Goodbye!");
            break;
    }
}

function main() {
    let choice;
    do {
        ui.displayMenu();
        choice = ui.getMenuChoice();
        handleChoice(choice);
    } while (choice !== 4);
}

main();
