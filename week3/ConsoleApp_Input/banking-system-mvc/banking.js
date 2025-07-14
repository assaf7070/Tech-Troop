let currentBalance = 100;

function getBalance() {
    return currentBalance;
}

function deposit(amount) {
    if (!isValidAmount(amount)) {
        return { success: false, msg: "Amount must be a positive number." };
    }
    currentBalance += amount;
    return { success: true, msg: `Deposited $${amount}. New balance: $${currentBalance}` };
}

function withdraw(amount) {
    if (!isValidAmount(amount)) {
        return { success: false, msg: "Amount must be a positive number." };
    }
    if (amount > currentBalance) {
        return { success: false, msg: "Insufficient balance." };
    }
    currentBalance -= amount;
    return { success: true, msg: `Withdrew $${amount}. New balance: $${currentBalance}` };
}

function isValidAmount(amount) {
    return typeof amount === 'number' && amount > 0;
}

module.exports = {
    getBalance,
    deposit,
    withdraw
};
