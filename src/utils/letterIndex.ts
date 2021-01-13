const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const letterIndex = (num: number): string => {
  const letters = [];

  while (num >= 0) {
    letters.unshift(ALPHABET[num % ALPHABET.length]);
    num = Math.floor(num / ALPHABET.length) - 1;
  }
  return letters.join('');
};

export { letterIndex };

export default letterIndex;
