export function checkWin(arr, shape, row, index) {

    let winArr = [];

    // בדיקת שורה
    const rowww = arr[row];
    rowww.forEach((v, i) => {
      if (v != shape) return;
      winArr.push({ r: row, i: i });
    });
    if (winArr.length < 3) winArr = []; else return winArr;

    // לבדוק תור
    arr.forEach((minArr, ind) => {
      if (minArr[index] != shape) return;
      winArr.push({ r: ind, i: index });
    });
    if (winArr.length < 3) winArr = []; else return winArr;

    // אלכסון 1
    arr.forEach((minArr, ind, arr) => {
      if (arr[ind][ind] != shape) return;
      winArr.push({ r: ind, i: ind });
    });
    if (winArr.length < 3) winArr = []; else return winArr;

    // אלכסון יורד
    arr.forEach((minArr, ind, arr) => {
        const max = arr.length - 1;
      if (arr[ind][max-ind] != shape) return;
      winArr.push({ r: ind, i: max-ind });
    });
    if (winArr.length < 3) winArr = []; else return winArr;

    return false;
  }

export function foundEmpty(cardArr){

    function getRandomNumber() {
      let randomNumber = Math.random();
      let scaledNumber = randomNumber * 3;
      return Math.floor(scaledNumber);
    }
    const rowRandom = getRandomNumber();
    const indexRandom = getRandomNumber();

    if (cardArr[rowRandom][indexRandom]) {
      return foundEmpty(cardArr)
    } else return {r:rowRandom, i:indexRandom};
  }