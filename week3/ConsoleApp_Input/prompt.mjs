import promptSync from 'prompt-sync';
const prompt = promptSync();

// Array of question/answer pairs
const quiz = [
  { question: "What is 2 + 2?", answer: "4" },
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What year is it?", answer: "2025" }
]

// Score tracking
let score = 0

// Ask each question
for (let i = 0; i < quiz.length; i++) {
  const userAnswer = prompt(`Question ${i + 1}: ${quiz[i].question} `)
  
  if (userAnswer.trim().toLowerCase() === quiz[i].answer.toLowerCase()) {
    console.log("Correct!")
    score++
  } else {
    console.log("Incorrect!")
  }
}

// Final score
console.log(`\nFinal Score: ${score}/${quiz.length} correct!`)