let getSolutions = (a,b,c) => {
    let d = Math.pow(b,2) - 4 * a * c;
    if (d < 0) {
        return { D: d, roots: []};
    } else if (d === 0) {
        let x1 = -b / (2 * a);
        return { D: d, roots: [x1]};
    } else if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        return { D: d, roots: [x1, x2]};
    }
}

let showSolutionsMessage = (a,b,c) => {
    let result = getSolutions(a,b,c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.roots.length === 0){
        console.log('Уравнение не имеет вещественных корней');
    } else if (result.roots.length === 1) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else if (result.roots.length === 2) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

let getAverageScore = (data) => {
    return getAverageMark(data);
}

let getAverageMark = (marks) => {
    let summLength = 0;
    let average = 0;
    let key = {};
    if (marks) {
        for (let subject in marks) {
            let summ = 0;
            for (let i = 0; i < marks[subject].length; i++ ) {
                summ += marks[subject][i];
            }
            summLength++;
            average += summ / marks[subject].length;
            key[subject] = summ / marks[subject].length;
         }
        key.average = average / summLength;
        return key;
    } else {
        return 'Вы не ввели данные';
    }
} 

let getPersonData = (secretData) => {
    return getDecodedValue(secretData);
}

let getDecodedValue = (secret) => {
    let arr = {};
    for (let property in secret) {
        if (property === 'aaa' && secret[property] === 1) {
            arr.firstName = 'Эмильо';
        } else if (property === 'bbb' && secret[property] === 0) {
            arr.lastName = 'Родриго';
        } else if (property === 'aaa' && secret[property] === 0) {
            arr.firstName = 'Родриго';
        } else if (property === 'bbb' && secret[property] === 1) {
            arr.lastName = 'Эмильо';
        }
    }
    return(arr);
}