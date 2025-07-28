//Ex1

function checkLuckyNumber(num) {
    // TODO: Create and return a promise that:
    // 1. Waits 800ms (use setTimeout)
    // 2. Resolves with "Lucky!" if number is divisible by 7
    // 3. Resolves with "Not lucky" for other positive numbers
    // 4. Rejects with Error("Invalid number") if number is negative or zero
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (num <= 0) {
                reject(new Error("Invalid number"))
            }
            else if (num % 7 === 0) {
                resolve("Lucky!");
            }
            else {
                resolve("Not luchy")
            }
        }, 800);
    });

}


checkLuckyNumber(20)
    .then(result => console.log(result))
    .catch(error => console.error(error.message));
checkLuckyNumber(7)
    .then(result => console.log(result))
    .catch(error => console.error(error.message));
checkLuckyNumber(0)
    .then(result => console.log(result))
    .catch(error => console.error(error.message));

//Ex2

function processFile(filename, processingTime) {
    return new Promise((resolve, reject) => {
        console.log(`Starting to process ${filename}...`);

        setTimeout(() => {
            // 15% chance of failure for realistic simulation
            if (Math.random() < 0.15) {
                reject(new Error(`Failed to process ${filename}`));
            } else {
                const result = {
                    filename: filename,
                    size: Math.floor(Math.random() * 1000) + 100, // Random size
                    processedAt: new Date().toLocaleTimeString()
                };
                console.log(`✓ Completed ${filename}`);
                resolve(result);
            }
        }, processingTime);
    });
}

// TODO: Use Promise.all() to process these files concurrently:
const files = [
    { name: "document1.pdf", time: 2000 },
    { name: "image1.jpg", time: 1500 },
    { name: "data.csv", time: 3000 },
    { name: "report.docx", time: 1000 }
];

// TODO: 
// 1. Create an array of promises using the files array
// 2. Use Promise.all() to wait for all files to complete
// 3. Log total processing time and all results
// 4. Handle the case where any file fails

// Bonus: Try Promise.allSettled() to see results even if some files fail

const promises = files.map(file => processFile(file.name, file.time));

Promise.all(promises)
    .then(results => {
        // Sum of all file processing durations
        const totalPlannedTime = files.reduce((sum, file) => sum + file.time, 0) / 1000;

        console.log(`All files processed (total planned time: ${totalPlannedTime.toFixed(2)} seconds)`);
        console.log(results);
    })
    .catch(error => {
        const totalPlannedTime = files.reduce((sum, file) => sum + file.time, 0) / 1000;

        console.error(`Some file failed (planned time: ${totalPlannedTime.toFixed(2)} seconds)`);
        console.error(error.message);
    });


//Ex3

// Simulated inventory database
const inventory = {
    'laptop': { price: 999, stock: 5 },
    'mouse': { price: 25, stock: 10 },
    'keyboard': { price: 75, stock: 0 }, // Out of stock
    'monitor': { price: 299, stock: 3 }
};

function checkInventory(itemNames) {
    // TODO: Return a promise that:
    // 1. Waits 500ms (simulating database check)
    // 2. Checks if all items are in stock
    // 3. Resolves with items if all available
    // 4. Rejects with specific item that's out of stock
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const items = itemNames.map(name => ({ name, ...inventory[name] }));

            const notAvailable = items.find(item => item.stock === 0);
            if (!notAvailable) {
                resolve(items)
            }
            else {
                reject(new Error(`${notAvailable.name} is out of stock`));
            }
        }, 500);
    });

}

function calculateTotal(itemNames) {
    // TODO: Return a promise that:
    // 1. Waits 200ms
    // 2. Calculates total price including 8% tax
    // 3. Resolves with { subtotal, tax, total }

    return new Promise((resolve) => {
        setTimeout(() => {

            const items = itemNames.map(name => ({ name, ...inventory[name] }));

            const subtotal = items.reduce((sum, item) => sum += item.price, 0);
            const tax = 0.08
            const total = subtotal + (subtotal * tax);
            resolve({ subtotal, tax, total });
        }, 200);
    });

}

function processPayment(amount) {
    // TODO: Return a promise that:
    // 1. Waits 1500ms (simulating payment processing)
    // 2. 90% success rate
    // 3. Resolves with { transactionId, amount, status: 'success' }
    // 4. Rejects with payment failure error

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.9) {
                resolve({
                    transactionId: Math.floor(Math.random() * 1000000),
                    amount,
                    status: 'success'
                })
            }
            else {
                reject(new Error("Payment failed. Please try again."));
            }
        }, 1500);
    })
}

function updateInventory(items) {
    // TODO: Return a promise that:
    // 1. Waits 300ms
    // 2. Reduces stock for each item
    // 3. Resolves with updated inventory status

    return new Promise((resolve) => {
        setTimeout(() => {
            items.forEach(item => {
                if (inventory[item] && inventory[item].stock > 0) {
                    inventory[item].stock -= 1;
                }
            });

            const updatedStatus = items.map(item => ({
                item,
                remainingStock: inventory[item] ? inventory[item].stock : null
            }));

            resolve(updatedStatus);
        }, 300);
    });
}

// TODO: Create a complete checkout function that:
// 1. Takes an array of item names
// 2. Chains all the above functions
// 3. Returns a promise with the final order result
// 4. Handles all possible errors appropriately

function checkout(itemNames) {
    // TODO: Implement the complete checkout flow
    let checkedItems;

    return checkInventory(itemNames)
        .then(items => {
            checkedItems = items.map(item => item.name) // store only names for later
            return calculateTotal(itemNames)
        })
        .then(priceDetails => {
            return processPayment(priceDetails.total)
                .then(paymentDetails => {
                    return updateInventory(itemNames)
                        .then(updatedInventory => {
                            return {
                                message: "Order completed successfully!",
                                items: checkedItems,
                                priceDetails,
                                paymentDetails,
                                updatedInventory
                            };
                        });
                });
        })
        .catch(error => {
            throw error;
        });
}

// Test cases:
checkout(['laptop', 'mouse'])           // Should succeed
    .then(result => console.log('Order success:', result))
    .catch(error => console.log('Order failed:', error.message));

checkout(['laptop', 'keyboard'])        // Should fail - keyboard out of stock
    .then(result => console.log('Order success:', result))
    .catch(error => console.log('Order failed:', error.message));

checkout(['monitor', 'mouse', 'laptop']) // Might fail at payment (10% chance)
    .then(result => console.log('Order success:', result))
    .catch(error => console.log('Order failed:', error.message));







