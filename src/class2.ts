export = {};

class Person {
    readonly name: string;  // This property is immutable - it can only be read
    private isCool: boolean;    // Can only access or modify from methods within this class
    protected email: string;    // Can access or modify from this class and subclasses
    public pets: number;    // Can access or modify from anywhere - including outside the class

    constructor(n: string, c: boolean, e: string, p: number) {
        this.name = n;
        this.isCool = c;
        this.email = e;
        this.pets = p;
    }

    sayMyName() {
        console.log(`Your not Hisenberg, you're ${this.name}`);
    }
}

const person1 = new Person('Danny', false, 'dan@e.com', 1);
console.log(person1.name);
// person1.name = 'James'; // Error: read only
// console.log(person1.isCool);    // Error: private property - only accessible within class
// console.log(person1.email); // Error: protected property - only accessible within Person class and its subclasses
console.log(person1.pets);  // Public property - so no problem
