const readline = require("readline");
const { AutoCompleteTrie } = require('./trie');

const trie = new AutoCompleteTrie();

console.log("=== AutoComplete Trie Console ===\nType 'help' for commands");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

rl.prompt();

rl.on("line", (line) => {
  const [cmd, ...args] = line.trim().split(" ");
  const input = args.join(" ");

  switch (cmd) {
    case "add":
      trie.addWord(input);
      console.log(`✓ Added '${input}' to dictionary`);
      break;
    case "find":
      console.log(trie.findWord(input) ? `✓ '${input}' exists in dictionary` : `✗ '${input}' not found in dictionary`);
      break;
    case "complete":
      const suggestions = trie.predictWords(input);
      console.log(suggestions.length ? `Suggestions for '${input}': ${suggestions.join(", ")}` : `No suggestions found`);
      break;
    case "use":
      const freq = trie.useWord(input);
      if (freq !== false) {
        console.log(`✓ Incremented usage for '${input}' (now ${freq})`);
      } else {
        console.log(`✗ Cannot increment '${input}': word not found`);
      }
      break;
    case "help":
      console.log(`Commands:
  add <word>        - Add word to dictionary
  find <word>       - Check if word exists
  complete <prefix> - Get completions
  use <word>        - Increment usage count
  help              - Show this message
  exit              - Quit program`);
      break;
    case "exit":
      console.log("Goodbye!");
      process.exit(0);
    default:
      console.log("Invalid command. Type 'help' for a list of commands.");
  }

  rl.prompt();
});
