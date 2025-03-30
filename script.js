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

function calculateTotalFour() {
  const sharingOne = Number(numberOne.value);
  const sharingTwo = Number(numberTwo.value);
  const calculatorFour = sharingOne / sharingTwo;
  total.textContent = calculatorFour;
}
buttonFour.addEventListener('click', calculateTotalFour);
//Calculator 2

let amount = document.querySelector('#amount');
let percentage = document.querySelector('#percentage');
let buttonFive = document.querySelector('#btn-5');
let totalTwo = document.querySelector('#total-2');
let amountValue;
let tipPercentageValue;
amount.addEventListener('input', function (e) {
  //amountValue = amount.value;
  amountValue = e.target.value;
});
percentage.addEventListener('input', function (e) {
  tipPercentageValue = e.target.value;
});
function izracun() {
  const calculateTotalFive = amountValue * (tipPercentageValue / 100);
  totalTwo.textContent = calculateTotalFive;
}
buttonFive.addEventListener('click', izracun);
//Loan Calculator
const loanAmount = document.querySelector('#loan-amount');
const interestRate = document.querySelector('#interest-rate');
const monthsToPay = document.querySelector('#months');
let loanAmountValue;
let interestRateValue;
let monthsToPayValue;
