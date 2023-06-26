function findCircleCircumference(diam: number) : string {
    return `The circumference is : ` + Math.PI * diam;
}

const findCircleArea = (radius: number): string => {
    return 'The area is : ' + Math.PI * radius * radius;
}

// console.log(findCircleCircumference(10));
// console.log(findCircleArea(20));

const findCircleDiameter: Function = (radius: number): string => {
    return 'Diameter is : ' + 2*radius;
}

// console.log(findCircleDiameter(10));
type Add = (a: number, b: number, c?: number | string)=> number

const add:Add = (a, b, c) => {
    console.log(c);
    return a+b;
}

console.log(add(5, 4, 'I could pass a number, string, or nothing here!'));
console.log(add(10, 20));

const logMessage = (msg: string): void => {
    console.log('This is a message : ' + msg);
}
// logMessage('TS is good');

// Declare the varible sayHello, and give it a function signature that takes a string and returns nothing.
let sayHello: (name: string) => void;
// Define the function, satisfying its signature
sayHello = (name) => {
    console.log('Hello ' + name);
};
// sayHello('Danny');

let age: any = '100';
age = 100;
age = {
    years: 100,
    months: 2,
};