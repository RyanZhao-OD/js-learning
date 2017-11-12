/**
 * 设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。
 */
for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);
}

for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, i * 1000);
}