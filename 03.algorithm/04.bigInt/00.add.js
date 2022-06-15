function add(a, b) {
  let aStr = String(a);
  let bStr = String(b);
  const maxLength = Math.max(aStr.length, bStr.length);
  const result = [];
  aStr = aStr.padStart(maxLength, '0');
  bStr = bStr.padStart(maxLength, '0');
  console.log(aStr);
  console.log(bStr);
  let temp = 0;
  for (let i = 0; i < maxLength; i++) {
    temp += Number(aStr.charAt(maxLength - i - 1)) + Number(bStr.charAt(maxLength - i - 1));
    // 处理进位
    if (temp > 9) {
      result.unshift(temp % 10);
      temp = Math.floor(temp / 10);
      //
    } else {
      result.unshift(temp);
      temp = 0;
    }
  }
  return result.join('');
}

console.log(add(127, 256));