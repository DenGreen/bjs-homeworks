"use strict"

function getResult(a,b,c){
    let x = [];
    let d = Math.pow(b,2) - 4 * a * c;
    if (d < 0) {
        return x;
    } else if (d === 0 ) {
        x.push(-b / (2 * a));
    } else if (d > 0) {
        x.push((-b + Math.sqrt(d)) / (2 * a));
        x.push((-b - Math.sqrt(d)) / (2 * a));
        Math.sqrt(13);
    }
    return x;
}

function getAverageMark(marks){
    let summ = 0;
    if (marks.length === 0 ) {
        return 0;
    } else if (marks.length > 5){
        console.log("Оценок больше 5");
        marks.splice(5);
    }
    for (let point of marks) {
        summ += point;  
    }
    return summ / marks.length;
} 


function askDrink(name,dateOfBirthday){
    let dateUser = dateOfBirthday.getFullYear();
    let data = new Date();
    let currentYear = data.getFullYear();
    let age = currentYear - dateUser;

    if (age > 18) {
        return `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
}