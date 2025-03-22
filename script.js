'use strict';
let numberOne = document.querySelector('#number-one');
let numberTwo = document.querySelector('#number-two');
let total = document.querySelector('#total');
let button = document.querySelector('#btn');
let buttonTwo = document.querySelector('#btn-2');

function calculateTotalOne() {
  const valueOfNumberOne = Number(numberOne.value);
  const valueOfNumberTwo = Number(numberTwo.value);
  const calculator = valueOfNumberOne + valueOfNumberTwo;
  total.textContent = calculator;
}

button.addEventListener('click', calculateTotalOne);

function calculateTotalTwo() {
  const minusOne = Number(numberOne.value);
  const minusTwo = Number(numberTwo.value);
  const calculatorTwo = minusOne - minusTwo;
  total.textContent = calculatorTwo;
}
buttonTwo.addEventListener('click', calculateTotalTwo);
