console.log('-----------------------№3');

let counter = {
  count : 0,
  up () {
    return this.count++;
  },
  down () {
    return this.count--;
  },
  showStep () {
    return this.count;
  },
}
counter.up();
counter.up();
counter.up();
counter.down();
console.log('Текущее значение = ', counter.showStep()); // 2

console.log('-----------------------№4');

function Calculator () {       
    this.sum = function (x) {    
        return function (y) {
           return x + y;
        };
    };
    this.subtract = function (x) {
        return function (y) {
            return x - y;
        };
    };
    this.divide = function (x) {
        return function (y) {
            return x / y;
         };
    };
    this.multiply = function (x) {
        return function (y) {
            return x * y;
         };
    };  
  };
  
  let calculator = new Calculator();

    console.log('Сумма = ', calculator.sum(6)(2)); // результат 8
    console.log('Разница = ', calculator.subtract(6)(2));// результат 4
    console.log('Деление = ', calculator.divide(6)(2));// результат 3
    console.log('Умножение = ', calculator.multiply(6)(2));// результат 12
