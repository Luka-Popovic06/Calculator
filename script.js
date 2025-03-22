'use strict';
let numberOne = document.querySelector('#number-one');
let numberTwo = document.querySelector('#number-two');
let total = document.querySelector('#total');
let button = document.querySelector('#btn');
let buttonTwo = document.querySelector('#btn-2');
let buttonThree = document.querySelector('#btn-3');
let buttonFour = document.querySelector('#btn-4');

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

function calculateTotalThree() {
  const multiplicationOne = Number(numberOne.value);
  const multiplicationTwo = Number(numberTwo.value);
  const calculatorThree = multiplicationOne * multiplicationTwo;
  total.textContent = calculatorThree;
}
buttonThree.addEventListener('click', calculateTotalThree);
