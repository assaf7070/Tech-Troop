
class AutoCompleteTrieNode {
    constructor(value = '') {
        this.value = value;
        this.children = {};
        this.endOfWord = false;
        this.frequency = 0;
    }
}


class AutoCompleteTrie {
    constructor() {
        this.root = new AutoCompleteTrieNode();
    }

    addWord(word) {
        word = word.toLowerCase();
        let node = this.root;

        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new AutoCompleteTrieNode(char);
            }
            node = node.children[char];
        }
        node.endOfWord = true;
    }

    findWord(word) {
        word = word.toLowerCase();
        let node = this.root;

        for (const char of word) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return node.endOfWord;
    }

    _getRemainingTree(prefix, node) {
        for (const char of prefix) {
            if (!node.children[char]) return null;
            node = node.children[char];
        }
        return node;
    }

    _allWordsHelper(prefix, node, allWords) {
        if (node.endOfWord)
            allWords.push({ word: prefix, freq: node.frequency })

        for (const child in node.children) {
            this._allWordsHelper(prefix + child, node.children[child], allWords)
        }
    }

    predictWords(prefix) {
        const node = this._getRemainingTree(prefix.toLowerCase(), this.root)
        const results = [];
        if (!node) return results;

        this._allWordsHelper(prefix.toLowerCase(), node, results);
        return results.sort((a, b) => b.freq - a.freq).map(w => `${w.word} (${w.freq})`);

    }

    useWord(word) {
        word = word.toLowerCase();
        let node = this.root;

        for (const char of word) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }

        if (node.endOfWord) {
            node.frequency++;
            return node.frequency;
        }
        return false;
    }

} 


module.exports = { AutoCompleteTrie };
