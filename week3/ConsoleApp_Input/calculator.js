const num1= parseFloat(process.argv[2])
const num2= parseFloat(process.argv[4])
const operator = process.argv[3]

let answer = 0;

if(operator === '+')
    answer = num1 + num2
else if(operator === '-')
    answer = num1 - num2
else if(operator === '*')
    answer = num1 * num2
else if(operator === '/')
    answer = num1 / num2

console.log(`${num1} ${operator} ${num2} = ${answer}`)
    