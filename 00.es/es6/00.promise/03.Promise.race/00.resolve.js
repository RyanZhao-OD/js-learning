const p1 = new Promise(resolve => {
    setTimeout(() => {
        console.log('p1');
        resolve(1);
    }, 2000);
});

const p2 = new Promise(resolve => {
    setTimeout(() => {
        console.log('p2');
        resolve(2);
    }, 1000);
});

const p3 = new Promise(resolve => {
    setTimeout(() => {
        console.log('p3');
        resolve(3);
    }, 1500);
});

const race = Promise.race([p1, p2, p3]);
race.then(data => {
    // 2
    console.log(data);
    // false 不是同一个promice对象
    console.log(race === p2);
}).catch(error => {
    console.log(error);
});
