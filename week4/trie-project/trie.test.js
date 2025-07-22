const { AutoCompleteTrie } = require('./trie');

let trie;

beforeEach(() => {
  trie = new AutoCompleteTrie();
});

test('adds and finds a word', () => {
  trie.addWord('cat');
  expect(trie.findWord('cat')).toBe(true);
});

test('does not find a non-existent word', () => {
  expect(trie.findWord('dog')).toBe(false);
});

test('predicts words with prefix', () => {
  trie.addWord('cat');
  trie.addWord('car');
  trie.addWord('card');
  const results = trie.predictWords('ca');
  expect(results).toContain('cat (0)');
  expect(results).toContain('car (0)');
  expect(results).toContain('card (0)');
});
