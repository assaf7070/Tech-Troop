
//Ex1
const safeJsonParse = function (str) {
    try {
        const obj = JSON.parse(str);
        return obj;
    }
    catch {
        // throw new Error("Invalid JSON format");
        console.log("Invalid JSON format")
    }
}

// console.log(safeJsonParse('{"name": "John"}'))
// console.log(safeJsonParse('invalid json'))


//Ex2
const fs = require('fs');
const path = require('path');


const readFileWithErrorHandling = function (filePath, callback) {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                callback(`File not found: ${filePath}`);
            }
            else if (err.code === 'EISDIR') {
                callback(`Path is a directory, not a file: ${filePath}`);
            }
            else {
                // Other errors
                callback(`Error reading file: ${err.message}`);
            }
            return;
        }

        callback(`File read successfully. Size: ${data.length} bytes`);
    });
}


const fullPath = path.join(__dirname, 'existing.txt');

// readFileWithErrorHandling(fullPath, (result) => {
//   console.log(result);
//   // Success: "File read successfully. Size: 150 bytes"
//   // Or error: "File not found: existing.txt"
// });