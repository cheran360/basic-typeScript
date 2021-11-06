"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Basic Types
let id = 5;
let company = 'Google';
let islegal = false;
let x = '90';
x = 89; //will not throw error
//Arrays---------------------------------------------
let ids = [1, 2, 3, 4, 6, 4];
let array = ["number", 90, "cheran"];
//Tuples---------------------------------------------
let arr = [39, "kumar", true];
//Tuple Array-----------------------------------------
let employee;
employee = [
    [1, 'cheran'],
    [2, 'abhi'],
    [3, 'suhit'],
];
//Union------------------------------------------------
let idx = 22;
//Enum-------------------------------------------------
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "UP";
    Direction2["Down"] = "DOWN";
    Direction2["Left"] = "LEFT";
    Direction2["Right"] = "RIGHT";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'Jhone',
};
//Type Assertion-------------------------------------------
let cid = '1';
// let customerId = <number>cid;
//or
let customerId = cid;
customerId = 4;
//Functions-------------------------------------------------
function addNum(x, y) {
    return x + y;
}
//Void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'Jhone',
};
const add = (x, y) => {
    return x + y;
};
const sub = (x, y) => {
    return x - y;
};
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const cheran = new Person(12, "cheran kumar");
const pavan = new Person(21, "pavan kumar");
//SubClasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "shaun", "manager");
// Generics-------------------------------------------------------
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['names', 'things', 'dont', 'lie']);
