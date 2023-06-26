export = {}

// NOTE: TypeScript docs recommend using interfaces to define objects, until you need to use the features of a type.

// NOTE: Interface define how an object should look
interface Person {
    name: string;
    age: number;
}

// NOTE: You can also define an object type using type alias
type AnotherPerson = {
    name: string;
    age: number;
}

// NOTE: An object type could also be defined anonymously
function sayHi2(person: { name: string, age: number }) {
    console.log(`Hello again 2 : ${person.name} : ${person.age}`);
}

// NOTE:
// Interfaces are very similar to type aliases, and in many cases you can use either.
// The key difference is that type aliases cannot be reopened to add new properties
// vs an interface which is always extendable.

function sayHi(person: Person) {
    console.log(`Hi! ${person.name} : ${person.age}`);
}

sayHi({
    name: 'Bikash Kalita',
    age: 22
});

function sayHiAgain(person: AnotherPerson) {
    console.log(`Hi again : ${person.name} : ${person.age}`);
}

sayHiAgain({
    name: 'Rishi aka chotu',
    age: 24,
})

sayHi2({
    name: 'binod',
    age: 22,
})

// Extending an interface:

interface Animal1 {
    name: string;
}

interface Bear1 extends Animal1 {
    honey: boolean;
}

const bear1: Bear1 = {
    name: "Winnie",
    honey: true,
}
console.log(bear1);

// Extending a type via intersections
type Animal2 = {
    name: string;
}

type Bear2 = Animal2 & {
    honey: boolean;
}

const bear2: Bear2 = {
    name: 'Winnie',
    honey: true
}
console.log(bear2);

// Adding new fields to an existing interface
interface Animal3 {
    name: string;
}
// Re-opening the Animal interface to add a new field
interface Animal3 {
    tail: boolean;
}

const dog1: Animal3 = {
    name: 'Chotu',
    tail: false
}
console.log(dog1);

// NOTE: Here's the key difference:
// A type cannot be changed after being created
type Animal4 = {
    name: string;
}
// Below will generate error: Duplicate identifier 'Animal'
// type Animal4 = {
//     tail: boolean
// }

// Interface can also define function signatures
interface Person1 {
    name: string;
    age: number;
    speak(sentence: string): void;
}

const person1 : Person1 = {
    name: 'John',
    age: 48,
    speak: sentence => console.log(sentence),
}

console.log(person1);

// One advantage of using an interface is that it is only used by TypeScript, not JavaScript. 
// This means that it won't get compiled and add bloat to your JavaScript. Classes are features of JavaScript, so it would get compiled.

// Interfaces with classes
interface HasFormatter {
    format(): string;
}

class Person2 implements HasFormatter {
    constructor(public username: string, protected password: string){}

    format() {
        return this.username.toLocaleLowerCase();
    }
}

// Must be objects that implement the HasFormatter interface
let person2: HasFormatter;
let person3: HasFormatter;

person2 = new Person2('Danny', 'password123');
person3 = new Person2('Jane', 'TypeScripter1990');

console.log(person2.format());
console.log(person3.format());

let people4: HasFormatter[] = [];
people4.push(person2);
people4.push(person3);
console.log(people4);