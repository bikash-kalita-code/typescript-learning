// We can make our code more concise by constructing class properties this way:
export = {}

// Note: that if we omit the access modifier, by default the property will be public.

class Person {
    constructor(
        readonly name: string,
        private isCool: boolean,
        protected email: string,
        public pets: number,
    ) {}
    // Writing it the above way, the properties are automatically assigned in the constructor – saving us from having to write them all out.

    sayMyName() {
        console.log(`Your not Hisenberg, you're ${this.name}`);
    }
}

const person1 = new Person('Danny', false, 'dan@e.com', 1);
console.log(person1.name);

// Classes can also be extended, just like in regular JavaScript

class Programmer extends Person {
    programmingLanguages: string[];

    constructor(
        name: string,
        isCool: boolean,
        email: string,
        pets: number,
        pL: string[]
    ) {
        // The super call must supply all parameters for base (Person) class, as the constructor is not inherited.
        super(name, isCool, email, pets);
        this.programmingLanguages = pL;
    }
}

const prog1 = new Programmer('Bikash', true, 'bikash@gmail.com',2,['JS', 'TS', 'C++']);
prog1.sayMyName();