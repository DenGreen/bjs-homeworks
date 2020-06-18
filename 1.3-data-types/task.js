"use strict"

function calculateTotalMortgage(percent, contribution, amount, date) {
    let arr = [percent, contribution, amount];
    let param = ['процент', 'начальный взнос', 'общая стоимость'];
    for (let i = 0; i < arr.length; i++){
        let val = arr[i];
        let t = ``;
        if (isNaN(val)) {
            return `Параметр ${param[i]} содержит неправильное значение ${val} \n`;
        }    
    }
    let summRefund = amount - contribution;
    let numberMonths = Math.round((date - new Date())/ 1000 / 60 / 60 / 24 /30);
    let procent = (percent/100) / 12;
    let montsPayment = summRefund * (procent + procent / (Math.pow((1 + procent),numberMonths)-1));
    return ((montsPayment * numberMonths).toFixed(2));
}

function getGreeting(name) {
    if (name) {
        return(`Привет, мир! Меня зовут ${name}`);
    } else {
        return(`Привет, мир! Меня зовут Аноним`);
    }
}