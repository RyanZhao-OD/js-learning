function get(source, path, defaultValue = undefined) {
  // a[3].b -> a.3.b -> [a,3,b]
  // path 中也可能是数组的路径，全部转化成 . 运算符并组成数组
  const paths = path.replace(/\[(\d+)\]/g, '.$1').split('.');
  let result = source;
  for (const p of paths) {
    // 注意 null 与 undefined 取属性会报错，所以使用 Object 包装一下。
    result = Object(result)[p];
    if (result == undefined) {
      return defaultValue;
    }
  }
  return result;
}
// 测试用例
console.log(get({ a: null }, "a.b.c", 3)); // 3
console.log(get({ a: undefined }, "a", 3)); // 3
console.log(get({ a: null }, "a", 3)); // 3
console.log(get({ a: [{ b: 1 }] }, "a[0].b", 3)); // 1