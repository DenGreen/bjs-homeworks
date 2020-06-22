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
    let summ = {};
    if (data) {
        for (let subject in data) {
            summ[subject] = getAverageMark(data[subject]);
        }
        summ.average = getAverageMark(Object.values(summ));
        return summ; 
    } else {
        return  'Вы не ввели данные';
    }
}

let getAverageMark = (marks) => {
    let averageMark = 0;
    let i = 0;
    if (marks.length < 1) {
        return 0;
    }
    for (let mark of marks) {
        averageMark += mark;
        i++;
    }
    return averageMark / i;
} 

let getPersonData = (secretData) => {
    let decrypted = {};
    for (let data in secretData) {
        decrypted[getDecodedValue(data)] = getDecodedValue(secretData[data]);
    }
    return decrypted;
}

let getDecodedValue = (secret) => {
    switch (secret) {
        case 'aaa':
            return 'firstName';
        case 'bbb':
            return 'lastName';
        case 1:
            return 'Эмильо';
        case 0:
            return 'Родриго';
    }
}