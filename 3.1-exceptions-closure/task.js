// Task 1

let parseCount = (value) => {
    const number = Number.parseInt(value);
    if (number) {
        return number;
    } else {
        throw new Error('Невалидное значение');
    }
}

let validateCount = (value) => {
    try {
        return parseCount(value);
    } catch(e) {
        return new Error('Невалидное значение');
    }
}

// Task 2

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ( (a + b) < c || (b + c) < a || (c + a) < b) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }
    getPerimeter() {
        let perimeter = this.a + this.b + this.c;
        return perimeter;
    }
    getArea() {
        let perimeterTrn = this.getPerimeter() / 2;
        let s = Math.sqrt(perimeterTrn  * (perimeterTrn  - this.a) * (perimeterTrn  - this.b) * (perimeterTrn  - this.c));
        return Number(s.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        let figure = new Triangle(a, b, c);
        return figure;
    } catch(e) {
        let Triangle = {
            getPerimeter() {
                return "Ошибка! Неправильный треугольник";
            },
            getArea() {
                return "Ошибка! Неправильный треугольник";
            }
        }
        return Triangle;
    }
}