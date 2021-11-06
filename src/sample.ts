
//Basic Types
let id:number = 5;
let company: string = 'Google';
let islegal:boolean = false;
let x:any='90';
x =89; //will not throw error

//Arrays---------------------------------------------

let ids: number[] = [1,2,3,4,6,4];

let array:any[] = ["number", 90, "cheran"];

//Tuples---------------------------------------------

let arr:[number, string, boolean] = [39, "kumar", true];

//Tuple Array-----------------------------------------

let employee: [number, string][]

employee = [
  [1,'cheran'],
  [2,'abhi'],
  [3,'suhit'],
];

//Union------------------------------------------------

let idx:string | number = 22;

//Enum-------------------------------------------------

enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right
}


enum Direction2 {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

// console.log(Direction2.Left);

//Objects------------------------------------------------

type User = {
  id:number,
  name:string,
}

const user: User = {
  id: 1,
  name:'Jhone',
}

//Type Assertion-------------------------------------------
let cid: any = '1';
// let customerId = <number>cid;
//or
let customerId = cid as number;

customerId = 4;

//Functions-------------------------------------------------

function addNum(x:number,y:number):number {
  return x + y;
}

//Void
function log(message: string | number):void {
  console.log(message)
}

//Interfaces---------------------------------------------------

//same as types (diff --> see at 31:20 brad Traversy TS) 
interface UserInterface {
  readonly id:number,  //readonly --> property 
  name:string,
  age?:number   // ? ==> optional feature
}

const user1: UserInterface = {
  id: 1,
  name:'Jhone',
}

interface mathFunc {
  (x:number,y:number): number;
}

const add: mathFunc = (x:number,y:number) :number => {
  return x+y;
}

const sub: mathFunc = (x:number,y:number) :number => {
  return x-y;
}

//Classes------------------------------------------------------

interface PersonInterface {
  id: number,
  name: string,
  register() : string
} 


class Person implements PersonInterface {
  id:number;  //(3 types of property (public, private, protected))
  name:string;

  constructor(id:number, name:string){
    this.id = id;
    this.name = name;
  }
  register() {
    return `${this.name} is now registered`;
  }
}


const cheran = new Person(12,"cheran kumar");
const pavan = new Person(21, "pavan kumar");

//SubClasses
class Employee extends Person{
  position: string;
  constructor(id:number, name: string, position:string){
    super(id,name);
    this.position = position;
  }
}

const emp = new Employee(3, "shaun", "manager");

// Generics-------------------------------------------------------

function getArray<T>(items: T[]):T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1,2,3,4]);
let strArray = getArray<string>(['names','things','dont','lie']);

