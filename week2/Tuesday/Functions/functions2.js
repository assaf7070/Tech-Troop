//Ex1

const people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!",
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub",
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power",
  },
];

const capitalize = function (str) {
  let capitalizedStr = "";
  capitalizedStr += str[0].toUpperCase(); // first letter, capitalized
  capitalizedStr += str.slice(1); // rest of the string
  return capitalizedStr;
};

const getSummary = function (person) {
  let summary = "";
  summary += capitalize(person.name);
  summary += ` is ${getAge(person.age)} `; //Yes - you can put a function call inside the tick quotes!
  summary += `${capitalizeProfession(person.profession)}`; //call function for profession
  summary += `from ${capitalize(person.city)}, ${capitalize(person.country)}. `; //call function for country + city
  summary += `${capitalize(person.city)} loves to say "${capitalizeCatchphrase(
    person.catchphrase
  )}".`; //call function for catchphrase
  return summary;
};

function getAge(age) {
  if (age < 21) return "Underage";
  else if (age > 55) return "55+";
  else return age.toString();
}

function capitalizeProfession(profession) {
  const splitPro = profession.toString().split(" ");
  return splitPro.reduce((acc, word) => acc + capitalize(word) + " ", "");
}

function capitalizeCatchphrase(catchphrase) {
  const splitCatchphrase = catchphrase.toString().split(" ");
  splitCatchphrase[0] = capitalize(splitCatchphrase[0]);
  return splitCatchphrase.join(" ");
}

//Examples
console.log(getSummary(people_info[0]));
//"Guido is an Underage Bungalow Builder from Sydurn, Canaland. Guido loves to say "What a piece of wood!"."
console.log(getSummary(people_info[1]));
console.log(getSummary(people_info[2]));



//Ex2

const story =
  "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage.";
const specialChars = [",", ".", "'", '"', "?", "!", ";"];
const wordCounts = {};

function cleanText(sentence, specialChars) {
  for (const char of specialChars) {
    sentence = sentence.split(`${char}`).join("");
  }
  return sentence.split(" ").map((word) => word.toLowerCase());
}


function addToCounter(word, wordCounts) {
  if (wordCounts[word]) wordCounts[word]++;
  else {
    wordCounts[word] = 1;
  }
}

function countWords(sentence, specialChars, wordCounts) {
  let cleanStory = cleanText(sentence, specialChars);

  for (let word of cleanStory) {
    addToCounter(word, wordCounts);
  }
  return wordCounts;
}

countWords(story, specialChars, wordCounts);
console.log(wordCounts);