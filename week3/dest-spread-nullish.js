//------------Spread------------
let meatArr = ["beef", "chicken"];
let vegetableArr = ["rabbit", "carrots", "potatoes", "lettuce"];

vegetableArr = vegetableArr.filter(item => item !== "rabbit");
meatArr = [...meatArr, "rabbit"]; 

console.log("Meat:", meatArr);
console.log("Vegetables:", vegetableArr);



var firstPiece = { id: 101, name: 'Ofri' }

var seoncdPiece = { country: 'Israel'}

var passport = {...firstPiece, ...seoncdPiece}

console.log(passport);



//------------Nullish------------
let employeesArr = [
  { name: "Joey", id: 1, age: 26 },
  { name: "Lily", id: null, age: 24 },
  { name: "Alice", id: 7, age: null },
  { name: "Sam", id: 8, age: 24 },
  { name: "Ray", id: null, age: null }
];

for (let employee of employeesArr) {
  const id = employee.id ?? null;
  const age = employee.age ?? null;

  if (id === null || age === null) {
    console.log(`${employee.name} has missing data.`);
  }
}

