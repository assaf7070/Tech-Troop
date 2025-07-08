//Ex1

function isEven(number) {
    if(number%2==0)
    {
        return true;
    }
    return false;
}

console.log(isEven(6));
console.log(isEven(7));

//Ex2

const arr = [2,3,4,5,6,7,8];

function printOddNumbers (array)
{
    for (const num of array)
    {
        if (!isEven(num))
        {
            console.log(num);
        }
    }
}

printOddNumbers(arr);

//Ex3

function checkExists(array,number)
{
    for (const num of array)
    {
        if (num===number)
        {
            return true;
        }
    }
    return false;
}

console.log(checkExists(arr,3));
console.log(checkExists(arr,9));


//Ex4

const calculator = {
    add : function(num1,num2) {return num1+num2;},
    subtract : function(num1,num2) {return num1-num2;}
}

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42

//Ex5

const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

function increaseByNameLength(money, name)
{
    const nameLen = name.length;
    return (nameLen * money);
}
function makeRegal(name)
{
    return "His Royal Highness, " + name;
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"

//Ex6
function amstrongNumber(num) {
    const digits = num.toString().split('').map(Number);
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
    return sum === num;
}

for (let i = 100; i <= 1000; i++) {
    if (amstrongNumber(i)) {
        console.log(i);
    }
}

