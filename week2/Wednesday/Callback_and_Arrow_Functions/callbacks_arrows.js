
//Ex1

const push = function () {
  console.log("pushing it!")
}

const pull = function () {
  console.log("pulling it!")
}

const pushPull = function(action) {
  action();
}

pushPull(push) //should print "pushing it!"
pushPull(pull) //should print "pulling it!"


//Ex2

const returnTime = function (time) {
  console.log('The current time is: ' + time)
}

const getTime = function(returnTime) {
    const time = new Date();
    returnTime(time);
}

getTime(returnTime)


//Ex3

const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};

const logData = function(data) {
  console.log(data);
}

displayData(console.error, logData, "I like to party")

//Ex4

const sum = (a, b, c) => a + b + c;

console.log(sum(1, 2, 3));

//Ex5

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

console.log(capitalize("bOb")) // returns Bob

console.log(capitalize("TAYLOR")) // returns Taylor
console.log(capitalize("feliSHIA")) // returns Felishia

//Ex6

const determineWeather = temp => {
  if(temp > 25){
    return "hot"
  }
  return "cold"
}

const commentOnWeather = (temp) => {
  const weather = determineWeather(temp);
  console.log(`It's ${weather}`);
}

commentOnWeather(30) //returns "It's hot"
commentOnWeather(22) //returns "It's cold"
