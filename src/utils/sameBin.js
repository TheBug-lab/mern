function sameBin(pass, range) {
  pass++;
  let skip = 2 ** pass / 2;
  let iso = Math.floor(skip / 2);

  let bin = [];
  for (let i = 0; i < range; i = i + skip) {
    for (let j = 0; j < iso; j++) {
      let temp = j + i + iso;
      if (temp <= 12) bin.push(temp);
    }
  }
  return bin;
}

export function calcBin(bin) {
  let length = bin.length - 1;
  let sum = 0;
  while (length >= 0) {
    sum += bin[length] * 2 ** length;
    length--;
  }
  return sum;
}

console.log(calcBin([1, 1, 1, 1]));

export default sameBin;
