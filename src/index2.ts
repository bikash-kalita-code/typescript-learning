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
let person1: (string | number | boolean)[] = ['Danny', 1 , true];
person1[0] = 100;
// person1[1] = {name: 'Danny'} // Error -  person array can't contain objects

// If you initialise a variable with a value, it's not necessary to explicitly state the type, as TypeScript will infer it
let person2 = ['Danny', 1, true];
person2[0] = 100;
// person2[1] = {name: 'Danny'} // Error -  person array can't contain objects

let person3: [string, number, boolean] = ['Danny', 1, true];
// person3[0] = 100;   // Error: Value at index 0 can only be a string