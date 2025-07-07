//Exercise: Variables, Identifiers and Operators

//Ex1
console.log((5 > 2) && false)
console.log(!("knife" === "sword"))
console.log((1 < 2) || (-1 > -1) || !false)
console.log("")
console.log((31 % 5) == "1")
console.log(!!true)
console.log("5th Avenue" != "5th Avenue")
console.log(52 !== "52")
console.log((undefined || null))

//Ex2
let a = 3
let c = 0
let b = a
b = a
c = a
b = c
a = b
console.log(a, b, c)

//----------------------------------

//Exercises: Conditional Statements

//Ex1
let age = 20;
if (age >= 18) {
    console.log("You can vote.");
}

//Ex2
let score = 85;
if (score >= 90 && score <= 100) {
    console.log("Grade: A");
}
else if (score >= 80 && score < 90) {
    console.log("Grade: B");
} else if (score >= 70 && score < 80) {
    console.log("Grade: C");
} else if (score >= 60 && score < 70) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

//Ex3
let temperature = 20;
let weather = "sunny";
if (temperature > 24 && weather === "sunny") {
    console.log("Go to the beach");
}
else if (temperature>=15 && temperature <= 24 && weather === "sunny") {
    console.log("Go for a walk");
} else if (temperature < 15 && weather === "sunny") {
    console.log("Stay inside and read");
} else if (weather === "rainy") {
    console.log("Watch a movie indoors");
}
else if (weather === "cloudy" && temperature > 21) {
    console.log("Go hiking");
}
else if (weather === "cloudy" && temperature <= 21) {
    console.log("Visit a museum");
}

//Ex4
let usernameLength = 6;
let passwordLength = 7;
let userAge = 15;
if (usernameLength >= 5 && passwordLength >= 8 && userAge >= 13) {
    console.log("Registration successful");
}   else if (usernameLength < 5) {
    console.log("Username must be at least 5 characters long");
}   else if (passwordLength < 8) {
    console.log("Password must be at least 6 characters long");
}   else if (userAge < 13) {
    console.log("You must be at least 18 years old to register");
}   

//Ex5
let customerType = "premium";
let purchaseAmount = 150;
let dayOfWeek = 6; // 0 = Sunday, 1 = Monday, etc.

if (customerType === "VIP") {
    console.log("You are eligible for a 20% discount");
} else {
    if (customerType === "premium") {
        if (dayOfWeek === 0 || dayOfWeek === 6) {
            console.log("You are eligible for a 15% discount");
        } else {
            console.log("You are eligible for a 10% discount");
        }
    } else {
        if (customerType === "regular") {
            if (purchaseAmount > 100) {
                console.log("You are eligible for a 10% discount");
            } else if (purchaseAmount > 50 && purchaseAmount <= 100) {
                console.log("You are eligible for a 5% discount");
            } else {
                console.log("You are not eligible for a discount");
            }
        } else {
            console.log("You are not eligible for a discount");
        }
    }
}

//Ex6
let year = 2024;

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log(year + " is a leap year");
        } else {
            console.log(year + " is not a leap year");
        }
    } else {
        console.log(year + " is a leap year");
    }
} else {
    console.log(year + " is not a leap year");
}

//-------------------------------------------
//Exercises: Arrays

const numbers = [1,2,3,4,5,6,7,8,9,10]
numbers.splice(1,2);
numbers[3]=1;
numbers.splice(-4,4);
numbers.reverse();
numbers.push(0);
numbers.reverse();
console.log(numbers);

//--------------------------------------------
//Exercises: Objects

//Ex1
const p1 = {
    name: "Assaf",
    age: 30,
    city: "Tel Aviv",
};
const p2 = {
    name: "John",
    age: 25,
    city: "New York",
};

if (p1.age == p2.age) {
    if (p1.city == p2.city) {
        console.log("Jill wanted to date Robert");
    }  else {
        console.log("Jill wanted to date Robert, but they lived in different cities");
    }
}

//Ex2
const library = {
    books: [
        { title: "To Kill a Mockingbird", author: "Harper Lee" },
        { title: "1984", author: "George Orwell" },
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
        { title: "Pride and Prejudice", author: "Jane Austen" },
        { title: "The Hobbit", author: "J.R.R. Tolkien" }
    ]
};

console.log(library);

//Ex3
const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}

const name1 = 'Bob'; //'Bob' or 'Ted';
if (reservations[name1]) {
  if (!reservations[name1].claimed) {
    console.log("Welcome back, " + name1 + "!");
  } else {
    console.log("Hmm, someone already claimed this reservation");
  }
} else {
  console.log("You have no reservation");
}

//Ex3.1
const name11 = 'Asi';
if (!reservations[name11]) {
    reservations[name11] = { claimed: true };
}
console.log(reservations);

//Ex3.2
let name2 = 'TeD'; // Try 'Ted', 'ted', 'TeD', etc.
const normalizedName = name2.charAt(0).toUpperCase() + name2.slice(1).toLowerCase();

if (reservations[normalizedName]) {
  if (!reservations[normalizedName].claimed) {
    console.log("Welcome back, " + normalizedName + "!");
  } else {
    console.log("Hmm, someone already claimed this reservation");
  }
} else {
  console.log("You have no reservation");
}

//Ex4
const date = 3;

const kitchen = {
  owner: "Geraldine",
  hasOven: true, // change to false if needed
  fridge: {
    price: 500,
    works: false, // change to true if needed
    items: [
      { name: "cheese", expiryDate: 7 },
      { name: "radish", expiryDate: 2 },
      { name: "bread", expiryDate: 1 }
    ]
  }
};

//Find the first expired item
let expiredItem = null;

for (let i = 0; i < kitchen.fridge.items.length; i++) {
  if (kitchen.fridge.items[i].expiryDate < date) {
    expiredItem = kitchen.fridge.items[i];
    break;
  }
}

if (expiredItem) {
  const hasOven = kitchen.hasOven;
  const fridgeWorks = kitchen.fridge.works;
  const daysExpired = date - expiredItem.expiryDate;
  const repairCost = kitchen.fridge.price / 2;

  let message = kitchen.owner + "'s " + expiredItem.name + " expired " + daysExpired + " day";

  if (daysExpired !== 1) {
    message += "s";
  }

  message += " ago. ";

  if (fridgeWorks) {
    message += "Weird, considering her fridge works. ";
  } else {
    message += "Probably because her fridge doesn't work. ";
  }

  if (hasOven) {
    message += "Luckily, she has an oven to cook the " + expiredItem.name + " in.";
  } else {
    message += "Too bad she doesn't have an oven to cook the " + expiredItem.name + " in.";
  }

  if (!fridgeWorks) {
    message += " And she'll have to pay " + repairCost + " to fix the fridge.";
  }

  console.log(message);
} else {
  console.log("No items are expired.");
}

//--------------------------------------
//Exercises: Loops

//Ex1
const names = ["Ashley", "Donovan", "Lucas"];
const ages = [23, 47, 18];
const people = [];

for (let i = 0; i < names.length; i++) {
  people.push({
    name: names[i],
    age: ages[i]
  });
}

console.log(people);

//Ex2
for (person of people) {
    console.log(`${person.name} is ${person.age} years old.`);
}

//Ex3
const posts = [
  {id: 1, text: "Love this product"},
  {id: 2, text: "This is the worst. DON'T BUY!"},
  {id: 3, text: "So glad I found this. Bought four already!"}
]

for (let post of posts) {
    if(post.id === 2) {
        spliceIndex = posts.indexOf(post);
        posts.splice(spliceIndex, 1);
    }
}

console.log(posts);

//Ex4
const postss = [
  {
    id: 1,
    text: "Love this product",
    comments: []
  },
  {
    id: 2,
    text: "This is the worst. DON'T BUY!",
    comments: [
      { id: 1, text: "Idiot has no idea" },
      { id: 2, text: "Fool!" },
      { id: 3, text: "I agree!" }
    ]
  },
  {
    id: 3,
    text: "So glad I found this. Bought four already!",
    comments: []
  }
];

// Find post with ID 2
for (let i = 0; i < postss.length; i++) {
  if (postss[i].id === 2) {
    const comments = postss[i].comments;
    for (let j = 0; j < comments.length; j++) {
      if (comments[j].id === 3) {
        comments.splice(j, 1); // remove the comment with id 3
        break; // exit inner loop
      }
    }
    break; // exit outer loop after post is found
  }
}

console.log(posts);

//Ex5
const dictionary = {
  "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
  "B": ["Banana", "Bonkers", "Brain", "Bump"],
  "C": ["Callous", "Chain", "Coil", "Czech"]
}


for (let key of Object.keys(dictionary)) {
    console.log(`Words starting with ${key}:`);
  for (let word of dictionary[key]) {
    console.log(word);
  }
}

