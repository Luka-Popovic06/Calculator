'use strict';
let amount = document.querySelector('#amount');
let tipPercentage = document.querySelector('#percentage');
let total = document.querySelector('#total');
let button = document.querySelector('#btn');

function calculateTotal() {
  const valueOfAmount = Number(amount.value);
  const valueOfTipePercentage = Number(tipPercentage.value);
  const calculator = valueOfAmount + tipPercentage;
  total.textContent = calculator;
}
