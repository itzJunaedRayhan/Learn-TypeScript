/***********************    Basic TypeScript     ******************/
let country;
country = 10;
country = "I Love Bangladesh"
console.log(country);

//  function
function multiply (a:number, b:number) {
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
    name : "Junaed",
    age : 35,
    isCaptain : true,
}

//  person.name = 35;
    person.name = "Rayhan";




/***********************    Explicit Type & Union Type     ******************/
//  normal variable:
let b : string | number;

//  array:
let a: (string | number)[] = [];
a.push('Junaed', 4);

//  object:
let c:object;
c = {
    a : 10,
    b : 'Junaed',
    c : true
}

let d: {
    name  : string,
    age   : number,
    adult : boolean
};
d = {
    name  : "Junaed",
    age   : 23,
    adult : true,
}



/***********************    Dynamic Type or Any Type     ******************/
//  Array:
let e: any[] = [];
a.push("Bangladesh");
a.push(34);

//  object:
let f : {
    name : any,
    age : any
};
f = {
    name: 'Bangladesh',
    age : 45
}



/***********************    How to use Function:     ******************/
//  function:
let myFunc: Function;
myFunc = (a:number, b:number, c:string = "true") => {
    return a + b;
}
console.log(myFunc(4, 5, "False"));



/***********************    Type Aliases     ******************/
type stringOrNum = string | number;
type userType = {name: string; age: number};

const userDetails = (id: stringOrNum, user: userType) => {
    console.log(`User id is ${id}, name is ${user.name}, age is ${user.age}`);
}

const sayHello = (user: userType) => {
    console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
}



/***********************    Function Signatures     ******************/
//  signature
let userData:(id : number | string, userInfo: {name : string, age : number}) => void;

userData = (id:number | string, user: {
    name : string,
    age  : number
}) => {
    console.log(`User id is ${id}`);
    console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
}





/***********************    classes     ******************/
import {Player} from './classes/Player.js'
const Mashrafi = new Player("Mashrafi", 40, "Bangladesh");
const SakibAlHasan = new Player("Sakib Al Hassan", 38, "Bangladesh");
console.log(Mashrafi.play())

//  Array type of class:

//  const playerArr:string[] = []; //  string type array
const playerArr:Player[] = [];  //  class type array
//  playerArr.push("Junaed");   //  error cause we passed string not class

playerArr.push(Mashrafi);
playerArr.push(SakibAlHasan);




/***********************    interfaces     ******************/
//  ============    INTERFACES WITH OBJECT   =============//
interface RectangleOptions {
    width: number;
    length: number;
}
function drawRectangle(option: RectangleOptions) {
    let width  = option.width;
    let length = option.length;
}

let threeDoption = {
    width : 30,
    length: 20,
    height: 30
}
drawRectangle(threeDoption);



//  ============    INTERFACES WITH CLASS   =============//
interface IsPlayer {
    name: string;
    readonly country: string;

    play() : void;
    getProperty():number;
}

//  PlayerTwo using IsPlayer Interfaces:
class PlayerTwo implements IsPlayer {
    constructor(
        public name: string, 
        private age: number, 
        readonly country: string
    ){}
    
    getProperty() {
        return this.age;
    }

    play(): void {
        console.log(`${this.name} from ${this.country} is playing!`);
    }
}
const Afridi = new PlayerTwo("Afridi", 10, "Pakistan");

//  Babar will be IsPlayer Inteface:
let Babar: IsPlayer;
Babar = new PlayerTwo("Babar Azam", 56, "Pakistan");




/***********************************    Generics     *****************************/
//  ============    GENERICS WITH FUNCTION   =============//
const addID = <T extends {
    name : string;
    age : number;
}>(obj: T) => {
    let id = Math.floor(Math.random() * 100);
    return {...obj, id};
};

let user = addID({
    name: "Mashrafi",
    age : 40,
    country: "Bangladesh"
});
console.log("Generics with Function: ", user);


//  ============    GENERICS WITH INTERFACE   =============//
interface APIResponse<T> {
    status: number;
    type: string;
    data: T;
}

const response1: APIResponse <object> = {
    status: 200,
    type: 'Good',
    data: {
        name    : "Junaed",
        age     : 23,
        country : "Bangladesh"
    }
}






/***********************************    enum     *****************************/
//  enum:
enum ResType {
    SUCCESS,
    FAILURE,
    UNAUTHENTICATED,
    FORBIDDED,
}

interface APIResponse2<T> {
    status: number;
    type: ResType;
    data: T;
}

const response2: APIResponse2 <string> = {
    status: 200,
    type: ResType.UNAUTHENTICATED,
    data: "Test"
}
console.log(response2);





/***********************************    Tuples     *****************************/
//  JotoGula Type totogula value, 
//  Siquence tik rakte hobe
let x:[number, string, object] = [4, 'word', {t: 1}];