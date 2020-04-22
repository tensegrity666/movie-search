const wordIndexes = [0, 1, 2, 3, 4, 5, 6, 7];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

const shuffled = shuffle(wordIndexes);

export { shuffled as default };
