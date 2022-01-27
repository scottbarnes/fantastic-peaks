// findCharIdex searches beteew index 120 and 150 for char, returning the
// index of char or the index of the space after the last full word.
const findCharIdx = (str: string, chars: string[]): number => {
  let i = 120;
  let lastSpace = 120;

  // Return the index of a period if found, and track the last 'space'.
  while (i <= 151) {
    if (str[i] === " ") {
      lastSpace = i;
    }
    if (chars.includes(str[i])) {
      return i;
    }
    i += 1;
  }

  return lastSpace;
};

// metaDescriptionMaker parses a string to create content for the 'meta description'
// HTML tag.
const metaDescriptionMaker = (name: string, description: string): string => {
  const lastChar = findCharIdx(description, [".", ";"]);

  return `${name}: ${description.slice(0, lastChar)}...`;
};

export default metaDescriptionMaker;
