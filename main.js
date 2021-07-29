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
  this.inputs = function (x,y) {
    this.x = x;
    this.y = y;
  }
  this.sum = function () {
   return this.x + this.y;
  };
  this.subtract = function () {
    return this.x - this.y;
  };
  this.divide = function () {
    return this.x / this.y;
  };
  this.multiply = function () {
    return this.x * this.y;
  };  
};

let calculator = new Calculator();
calculator.inputs(6,2);
	console.log('Сумма = ', calculator.sum()); // результат 8
  console.log('Разница = ', calculator.subtract());// результат 4
  console.log('Деление = ', calculator.divide());// результат 3
  console.log('Умножение = ', calculator.multiply());// результат 12