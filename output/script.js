/***********************    Basic TypeScript     ******************/
let country;
country = 10;
country = "I Love Bangladesh";
console.log(country);
//  function
function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 4));
//  array
let mixed = ["apple", 3, true, {}];
mixed.push({
    name: "Sakib",
});
//  object:
let person = {
    name: "Junaed",
    age: 35,
    isCaptain: true,
};
//  person.name = 35;
person.name = "Rayhan";
/***********************    Explicit Type & Union Type     ******************/
//  normal variable:
let b;
//  array:
let a = [];
a.push('Junaed', 4);
//  object:
let c;
c = {
    a: 10,
    b: 'Junaed',
    c: true
};
let d;
d = {
    name: "Junaed",
    age: 23,
    adult: true,
};
/***********************    Dynamic Type or Any Type     ******************/
//  Array:
let e = [];
a.push("Bangladesh");
a.push(34);
//  object:
let f;
f = {
    name: 'Bangladesh',
    age: 45
};
/***********************    How to use Function:     ******************/
//  function:
let myFunc;
myFunc = (a, b, c = "true") => {
    return a + b;
};
console.log(myFunc(4, 5, "False"));
const userDetails = (id, user) => {
    console.log(`User id is ${id}, name is ${user.name}, age is ${user.age}`);
};
const sayHello = (user) => {
    console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
};
/***********************    Function Signatures     ******************/
//  signature
let userData;
userData = (id, user) => {
    console.log(`User id is ${id}`);
    console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
};
/***********************    classes     ******************/
import { Player } from './classes/Player.js';
const Mashrafi = new Player("Mashrafi", 40, "Bangladesh");
const SakibAlHasan = new Player("Sakib Al Hassan", 38, "Bangladesh");
console.log(Mashrafi.play());
//  Array type of class:
//  const playerArr:string[] = []; //  string type array
const playerArr = []; //  class type array
//  playerArr.push("Junaed");   //  error cause we passed string not class
playerArr.push(Mashrafi);
playerArr.push(SakibAlHasan);
function drawRectangle(option) {
    let width = option.width;
    let length = option.length;
}
let threeDoption = {
    width: 30,
    length: 20,
    height: 30
};
drawRectangle(threeDoption);
//  PlayerTwo using IsPlayer Interfaces:
class PlayerTwo {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    getProperty() {
        return this.age;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing!`);
    }
}
const Afridi = new PlayerTwo("Afridi", 10, "Pakistan");
//  Babar will be IsPlayer Inteface:
let Babar;
Babar = new PlayerTwo("Babar Azam", 56, "Pakistan");
/***********************************    Generics     *****************************/
//  ============    GENERICS WITH FUNCTION   =============//
const addID = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addID({
    name: "Mashrafi",
    age: 40,
    country: "Bangladesh"
});
console.log("Generics with Function: ", user);
const response1 = {
    status: 200,
    type: 'Good',
    data: {
        name: "Junaed",
        age: 23,
        country: "Bangladesh"
    }
};
/***********************************    enum     *****************************/
//  enum:
var ResType;
(function (ResType) {
    ResType[ResType["SUCCESS"] = 0] = "SUCCESS";
    ResType[ResType["FAILURE"] = 1] = "FAILURE";
    ResType[ResType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    ResType[ResType["FORBIDDED"] = 3] = "FORBIDDED";
})(ResType || (ResType = {}));
const response2 = {
    status: 200,
    type: ResType.UNAUTHENTICATED,
    data: "Test"
};
console.log(response2);
/***********************************    Tuples     *****************************/
//  JotoGula Type totogula value, 
//  Siquence tik rakte hobe
let x = [4, 'word', { t: 1 }];
