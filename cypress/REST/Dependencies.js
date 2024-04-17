



export function genRandomEnglishString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

export function generateRandomNumStr(number) {
    const randomNum = Math.floor(Math.random() * 900000000000) + 100000000000;
    return randomNum.toString().substring(0,number);
  }