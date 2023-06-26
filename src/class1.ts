export = {}

class Person {
    name: string;
    isCool: boolean;
    pets: number;

    constructor(n:string, c: boolean, p: number) {
        this.name = n;
        this.isCool = c;
        this.pets = p;
    }

    sayHello() {
        return `Hi, my name is ${this.name} and I have ${this.pets} pets`;
    }
}

const person1 = new Person('Danny', false, 1);
const person2 = new Person('Sarah', true, 6);

console.log(person1.sayHello());
console.log(person2.sayHello());

let People: Person[] = [person1, person2];