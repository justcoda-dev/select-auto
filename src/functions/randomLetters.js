// const letters = "qwertyuiopasdfghjklzxcvbnm";
export const randomLetters = (length = 10, letters = 'qwertyuiopasdfghjklzxcvbnm') => {
  return Array.from(Array(length), (v, i) => {
    const randomNumber = (letters) => {
      return Math.ceil(Math.random() * letters.length);
    };
    const res = [];
    for (let i = 0; i < 10; i++) {
      const index = randomNumber(letters);
      res.push(letters[index]);
    }
    return { name: res.join(''), id: i };
  });
};
