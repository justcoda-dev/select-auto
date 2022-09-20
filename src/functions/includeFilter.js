export const filterArrByWord = (searchedText, list) => list.filter((item) => Object.values(item).some((value) => value.toString().toLowerCase().indexOf(searchedText.toLowerCase()) > -1));
