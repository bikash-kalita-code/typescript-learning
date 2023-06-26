# TypeScript
TypeScript cannot be understood by browsers, so it has to be compiled into JavaScript by the TypeScript Compiler (TSC).

### Setup TypeScript project
 - Install TypeScript compiler globally
`npm i -g typescript`

 - Verify TS Compiler installation
`tsc -v`

 - To compile a TS say 'index.ts' into JS file:
`tsc index.ts` or `tsc index`
This will convert the file into `index.js` file.

 - Alternatively, you can also transpile the code into JS file our your name of choice:
`tsc index.ts --outfile file-name.js`

 - If you want TSC to compile your code automatically, whenever you make a change, add the "watch" flag:
`tsc index.ts -w`

 - An interesting thing about TypeScript is that it reports errors in your text editor whilst you are coding, but it will always compile your code – whether there are errors or not. This is an important property of TypeScript: it assumes that the developer knows more. Even though there's a TypeScript error, it doesn't get in your way of compiling the code. It tells you there's an error, but it's up to you whether you do anything about it.

#### How to set up the ts config file
The ts config file should be in the root directory of your project. In this file we can specify the root files, compiler options, and how strict we want TypeScript to be in checking our project.
 - To create a ts config file:
`tsc --init`
This will create a tsconfig.json file in the project root.

```
{
    "compilerOptions": {
        ...
        /* Modules */
        "target": "es2016", // Change to "ES2015" to compile to ES6
        "rootDir": "./src", // Where to compile from
        "outDir": "./public", // Where to compile to (usually the folder to be deployed to the web server)
        
        /* JavaScript Support */
        "allowJs": true, // Allow JavaScript files to be compiled
        "checkJs": true, // Type check JavaScript files and report errors
        
        /* Emit */
        "sourceMap": true, // Create source map files for emitted JavaScript files (good for debugging)
         "removeComments": true, // Don't emit comments
    },
    "include": ["src"] // Ensure only files in src are compiled
}
```

 - To compile everything and watch for changes:
`tsc -w`

#### Note: when input files are specified on the command line (for example, `tsc index`), `tsconfig.json` files are ignored.


### Types in TypeScript:
In JavaScript, a primitive value is data that is not an object and has no methods. There are 7 primitive data types:
1. string
2. number
3. bigint
4. boolean
5. undefined
6. null
7. symbol

### NOTE: Primitives are immutable: they can't be altered. It is important not to confuse a primitive itself with a variable assigned a primitive value. The variable may be reassigned a new value, but the existing value can't be changed in the ways that objects, arrays, and functions can be altered.

Example:
```
let name = 'Danny';
name.toLowerCase();
console.log(name); // Danny - the string method didn't mutate the string

let arr = [1, 3, 5, 7];
arr.pop();
console.log(arr); // [1, 3, 5] - the array method mutated the array

name = 'Anna' // Assignment gives the primitive a new (not a mutated) value
```
In JavaScript, all primitive values (apart from null and undefined) have object equivalents that wrap around the primitive values. **These wrapper objects are String, Number, BigInt, Boolean, and Symbol**. These wrapper objects provide the methods that allow the primitive values to be manipulated.

Back to TypeScript, we can set the type we want a variable to be be adding `: type` (called a "type annotation" or a "type signature") after declaring a variable.
But it's usually best to not explicitly state the type, as TypeScript automatically infers the type of a variable (type inference).

 - **A union type is a variable that can be assigned more than one type:**
```
let age: string | number;
age = 26;
age = "26";
```

#### Reference Types
In JS, almost **everything** is an object. In fact (and confusingly), strings, numbers and booleans can be objects with the ***new*** keyword.

```
let firstname = new String('Danny');
console.log(firstname); // String {'Danny'}
```

## Primitive vs reference types
If a primitive type is assigned to a variable, we can think of that variable as containing the primitive value. Each primitive value is stored in a unique location in memory.
If we have two variables, x and y, and they both contain primitive data, then they are completely independent of each other.
This isn't the case with reference types. Reference types refer to a memory location where the object is stored.

```
let point1 = { x: 1, y: 1 };
let point2 = point1;

point1.y = 100;
console.log(point2.y); // 100 (point1 and point2 refer to the same memory address where the point object is stored)
```

### Arrays in TS:
In TS, you can define what type of data an array can contain:
```
let ids: number[] = [1,2,3,4,5]; // can only contain numbers
let names: string[] = ['Danny', 'Anna', 'Bazza']; // can only contain strings
let options: boolean[] = [true, false, false]; // can only contain true or false
let books: object[] = [
    { name: 'Fooled by randomness', author: 'Test Surname'},
    { name: 'Sapiens', author: 'Test2 Surname2'},
];  // can only contain objects
let arr: any[] = ['hello', 1, true];    // any basically reverts TS back to JS
ids.push(6);
// ids.push('7');  // ERROR: Argument of type 'string' is not assignable to argument of type 'number'
let person: (string | number | boolean)[] = ['Danny', 1 , true];
person[0] = 100;
// person[1] = {name: 'Danny'} // Error -  person array can't contain objects

// If you initialise a variable with a value, it's not necessary to explicitly state the type, as TypeScript will infer it
let person2 = ['Danny', 1, true];
person2[0] = 100;
// person2[1] = {name: 'Danny'} // Error -  person array can't contain objects
```
If you initialise a variable with a value, it's not necessary to explicitly state the type, as TypeScript will infer it.

**Tuples :** A tuple is an array with fixed size and known datatypes. They are stricter than regular arrays.
```
let person3: [string, number, boolean] = ['Danny', 1, true];
// person3[0] = 100;   // Error: Value at index 0 can only be a string
```

## Objects in TS:
Objects in TS must have all the correct properties and value types:
```
// Declare a variable person with a specific object type annotation
let person: {
    name: string;
    location: string;
    isProgrammer: boolean;
};

// Assign person to an object with all the necessary properties and value types
person = {
    name: 'Danny',
    location: 'UK',
    isProgrammer: true,
};

// person.isProgrammer = 'YES';    // ERROR: should be a boolean

// person = {
//     name: 'John',
//     location: 'US',
// };
// Error: missing the isProgrammer property
```

**When defining the signature of an object, you will usually use an interface. This is useful if we need to check that multiple objects have the same specific properties and value types:**
```
interface Person {
    name: string;
    location: string;
    isProgrammer: boolean;
}

let person4: Person = {
    name: 'Danny',
    location: 'UK',
    isProgrammer: true,
};

let person5: Person = {
    name: 'Sarah',
    location: 'Germany',
    isProgrammer: false,
}
```

**We can also declare function properties with function signatures.**
```
interface Speech {
    sayHi(name: string): string;
    sayBye(name: string): string;
}

let sayStuff: Speech = {
    sayHi: function (name: string) {
        return `Hi ${name}`;
    },
    sayBye:  (name: string) => `Bye ${name}`,
}

console.log(sayStuff.sayHi('Bikash'));
console.log(sayStuff.sayBye('Bikash'));
```

### Functions in TS:
```
function findCircleCircumference(diam: number) : string {
    return `The circumference is : ` + Math.PI * diam;
}

const findCircleArea = (radius: number): string => {
    return 'The area is : ' + Math.PI * radius * radius;
}
```

console.log(findCircleCircumference(10));
console.log(findCircleArea(20));

In the above code, notice how it isn't necessary to explicitly state that circle is a function; TypeScript infers it. TypeScript also infers the return type of the function, so it doesn't need to be stated either. Although, if the function is large, some developers like to explicitly state the return type for clarity.
```
const findCircleDiameter: Function = (radius: number): string => {
    return 'Diameter is : ' + 2*radius;
}

console.log(findCircleDiameter(10));
```

 - **We can add a question mark after a parameter to make it optional.**
```
const add = (a: number, b: number, c?: number | string): number => {
    console.log(c);
    return a+b;
}

console.log(add(5, 4, 'I could pass a number, string, or nothing here!'));
console.log(add(10, 20));
```

 - A function that returns nothing is said to return **void**
```
const logMessage = (msg: string): void => {
    console.log('This is a message : ' + msg);
}
logMessage('TS is good');
```

If we want to declare a function variable, but not define it, **then use a function signature**.
```
// Declare the varible sayHello, and give it a function signature that takes a string and returns nothing.
let sayHello: (name: string) => void;
// Define the function, satisfying its signature
sayHello = (name) => {
    console.log('Hello ' + name);
};
sayHello('Danny');
```

### Dynamic (any) types
Using the `any` type, we can basically revert TS back into JS:
```
let age: any = '100';
age = 100;
age = {
    years: 100,
    months: 2,
};
```
It's recommended to avoid using the any type as much as you can, as it prevents TypeScript from doing its job – and can lead to bugs.

### Type Aliases
Type Aliases can reduce code duplication, keeping our code DRY.
```
type StringOrNumber = string | number;

type PersonObject = {
  name: string;
  id: StringOrNumber;
};

const person1: PersonObject = {
  name: 'John',
  id: 1,
};

const person2: PersonObject = {
  name: 'Delia',
  id: 2,
};

const sayHello = (person: PersonObject) => {
  return 'Hi ' + person.name;
};

const sayGoodbye = (person: PersonObject) => {
  return 'Seeya ' + person.name;
};
```
### The DOM and type casting
TypeScript doesn't have access to the DOM like JavaScript. This means that whenever we try to access DOM elements, TypeScript is never sure that they actually exist.
The following will generate an error if done in TS:
```
const link = document.querySelector('a');
console.log(link.href); // ERROR: Object is possibly 'null'. TypeScript can't be sure the anchor tag exists, as it can't access the DOM
```
With the non-null assertion operator (!) we can tell the compiler explicitly that an expression has value other than null or undefined. This is can be useful when the compiler cannot infer the type with certainty, but we have more information than the compiler.
```
// Here we are telling TypeScript that we are certain that this anchor tag exists
const link = document.querySelector('a')!;
console.log(link.href); // www.freeCodeCamp.org
```

