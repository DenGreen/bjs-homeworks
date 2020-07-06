function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  // Замедление на половину секунды.
  sleep(100); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return (sum += arg);
  }, 0);
}

function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i]);
}

function memorize(fn, limit) {
  let memory = [];

  return function (...args) {
    let valuesMemory = memory.find((values) => compareArrays(values.args, args));
    if (valuesMemory) {
        return valuesMemory.result;
    } else {
        let res = fn(...args);
        memory.push({args: args, result: res});
        if (memory.length > limit) memory.shift();
        return res;
    }
  };
}

const mSum = memorize(sum, 5);
mSum(3, 4);
mSum(5, 1);
mSum(3, 4);


/*function testCase(testFunction, timerProc) {
    let array1 = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4], [2,8,5,3], [4,3] ];
    console.time('timerProc');
    for (let i = 0; i < 100; i++) {
        console.log(array1.forEach(values => testFunction(...values)));
    }
    console.timeEnd('timerProc');
}

testCase(mSum, 'timerProc');*/

// summ 70762.92895507812ms
// mSumm 552.091064453125ms