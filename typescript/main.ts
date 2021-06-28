
// Simple Types
var greeting:string = "Hello there!";
let secondGreeting:string = "Yo yo yooo!";

let age:number = 29;
age = 35;

let success:boolean = true;

let result:any = '100';
result = 100;

// Complex Type
// Optional properties are denoted with a question mark after the variable declaration
interface IUser {
    name:string,
    age?:number,
    saying?:string,
    print():string
}

let user:IUser = {
    name: 'John',
    age: age,
    saying: greeting,
    print: function(){return ''}
}
console.log(user);


class Person {
    id: number;

    constructor(id:number){
        this.id = id;
    }
}

class Manager extends Person implements IUser{
    name:string;
    age:number;

    constructor(id:number, name:string, age:number){
        super(id);
        this.name = name;
        this.age = age;
    }

    print(){
        return 'some'
    }
}

let m:IUser = new Manager(10,"Alexandra", 30);
console.log(m.name);

// -- Inheritence

class Department{
    private code:string;
    name:string;
    protected budget:number;

    getCode(){
        return this.code;
    }
}

let d = new Department();
d.getCode();

// -- Module

// -- Annotation

// -- Decorator
// @Test
// class Vehicle {
//     @Getter
//     name:string;

//     print() {

//     }
// }

// function Test(target){

// }

// function Getter(target){
//     //what is the type of this property
// }