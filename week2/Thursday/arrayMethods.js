// let vegetables = [
//   { name: "Eggplant", color: "purple" },
//   { name: "Carrot", color: "orange" },
//   { name: "Squash", color: "orange" },
//   { name: "Tomatoe", color: "red" },
//   { name: "Onion", color: "white" },
//   { name: "Sweet Potato", color: "orange" },
// ];

// const orangeColor = vegetables.filter((v) => v.color === "orange");
// console.log(orangeColor);

// let people = [
//   { salary: 1300, goodPerformance: false },
//   { salary: 1500, goodPerformance: true },
//   { salary: 1200, goodPerformance: true },
//   { salary: 1700, goodPerformance: false },
//   { salary: 1600, goodPerformance: true },
// ];

// const updateSalary = function (person) {
//   if (person.goodPerformance === true) {
//     person.salary += 300;
//   }
// };

// people.forEach(updateSalary);
// people.forEach((p) => console.log(p.salary));


// let posts = [
//   {
//     id: 0, text: "I'm not here",
//     comments: [{ id: 0, text: "support that" }]
//   },
//   {
//     id: 1, text: "Find me",
//     comments: [
//       { id: 0, text: "here I am" },
//       { id: 1, text: "rock you like a hurricane" },
//       { id: 2, text: "dum dum" }]
//   },
//   {
//     id: 2, text: "Where's waldo anyway",
//     comments: [
//       { id: 0, text: "who's waldo" },
//       { id: 1, text: "he's called Effi" }]
//   },
//   {
//     id: 3, text: "Poof",
//     comments: [{ id: 0, text: "like magic" }]
//   }
// ]

// const findById = id => posts.find(p => p.id === id)

// function findCommentByID(postID, commentID) {
//   const post = findById(postID);
//   return post.comments.find(c => c.id === commentID);
// }

// console.log(findCommentByID(1, 0));


// let movies = [
//     { title: "Dareangel", studio: "Marvel", year: 2023 },
//     { title: "Batterfly", studio: "Fox", year: 2021 },
//     { title: "League of Ordinary People", studio: "Blizzard", year: 2025 },
//     { title: "Thor: Ragnarok", studio: "Marvel", year: 2017 },
// ]


// function something() {
//   if(movies.some(m => m.studio ==="Marvel")) console.log("Let's go watch some movies");
//   else {
//     console.log("Let's stay home");
//   }
//   if(movies.every(m => m.year > 2020)) console.log("Futuristic stuff");
//   else {
//     console.log("Yawn");
//   }
// }

// something();

let users = 
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    }
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
      "name": "Johns Group",
      "catchPhrase": "Configurable multimedia task-force",
      "bs": "generate enterprise e-tailers"
    }
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
      "name": "Abernathy Group",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    }
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    }
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }
]


//Ex1

console.log(users.map(u => {return { email: u.email, companyName: u.company.name}}));

//Ex2 + Ex3

console.log(users.filter(u1 => u1.address.zipcode.charAt(0) === "5").map(u => u.id));

//Ex4

console.log(users.map(u=>u.name).filter(n => n.charAt(0)==="C"));

//Ex5

console.log(users.every(u => u.address.city === "South Christy"));

//Ex6

console.log(users.find(u=>u.address.suite === "Apt. 950").company.name);

//Ex7

const shortBrief = function(user) {
  console.log(`${user.name} lives in ${user.address.city}, and owns the company ${user.company.name}`);
}
console.log(users.forEach(shortBrief))

//Ex8

let inventory = [
    { name: "Laptop", price: 899.99, quantity: 5 },
    { name: "Mouse", price: 24.99, quantity: 12 },
    { name: "Keyboard", price: 79.99, quantity: 8 },
    { name: "Monitor", price: 249.99, quantity: 3 },
    { name: "Headphones", price: 149.99, quantity: 6 }
]

console.log(inventory.reduce((sum,item) => sum+ item.price*item.quantity,0))

//Ex9

let studentScores = [92, 87, 76, 95, 88, 72, 91, 83, 79, 96, 85, 74, 89, 93, 81]

const gradingScale = grade =>
  grade > 89 ? "A" :
  grade > 79 ? "B" :
  grade > 69 ? "C" : "F";

console.log(studentScores.reduce((countScores, grade) => {
  countScores[gradingScale(grade)] = (countScores[gradingScale(grade)] || 0) + 1
  return countScores
}, {} ))


//Ex10

let cartItems = [
    { name: "T-shirt", price: 19.99, category: "clothing", quantity: 2 },
    { name: "Laptop", price: 1299.99, category: "electronics", quantity: 1 },
    { name: "Coffee Beans", price: 12.99, category: "food", quantity: 3 },
    { name: "Headphones", price: 89.99, category: "electronics", quantity: 1 },
    { name: "Jeans", price: 59.99, category: "clothing", quantity: 1 }
]

let taxRates = {
    clothing: 0.08,    // 8% tax
    electronics: 0.10, // 10% tax  
    food: 0.05        // 5% tax
}


console.log(cartItems.reduce((sum,item) => sum+ (item.price*item.quantity)+(item.price*item.quantity*taxRates[item.category]),0))