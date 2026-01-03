"use strict";
let sales = 123456789;
let course = 'TypeScript';
let is_published = true;
function render(document) {
    console.log(document);
}
let nums = [1, 2, 3];
let objects = [1, 'hey', { id: 5 }];
let array = [];
let user = [1, 'Mosh'];
let mySize = 2;
console.log(mySize);
function calculateTax(income) {
    if (income < 50000) {
        return 0;
    }
}
function calc(income = 300) {
    return income + 100;
}
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
//# sourceMappingURL=app.js.map