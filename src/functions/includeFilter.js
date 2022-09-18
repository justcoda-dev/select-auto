export const filterArrByWord = (word, arr, length) => {
  const listLength = arr.length;
  const arrWithSameCount = arr.map((item) => {
    const sameCount = [...item.name.toLowerCase()].filter(latter => {
      if ([...word.toLowerCase()].includes(latter)) {
        return latter;
      }
    }).join('').length;
    return { ...item, sameCount };
  });
  arrWithSameCount.sort((a, b) => b.sameCount - a.sameCount);
  arrWithSameCount.forEach(item => delete item.sameCount);
  arrWithSameCount.length = length && length <= listLength ? length : listLength;
  return arrWithSameCount;
};