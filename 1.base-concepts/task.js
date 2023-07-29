"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let D;
	let x1;
	let x2;
	D = Math.pow(b, 2) - 4 * a * c;
	if (D > 0) {
		x1 = (-b + Math.sqrt(D)) / (2 * a);
		x2 = (-b - Math.sqrt(D)) / (2 * a);
		arr.push(x1, x2);
	} else if (D == 0) {
		x1 = x2 = -b / (2 * a);
		arr.push(x1);
	} else {
		arr.push();
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let S = amount - contribution;
	let n = countMonths;
	let P = percent / 100 / 12;
	let monthlyPayment = S * (P + (P / (((1 + P) ** n) - 1)));
	let total = n * monthlyPayment;
	total = Number(total.toFixed(2))
	return total;
	//percent -процент, contribution-взнос, amount-сумма,countMonths-количество месяцев;
}
