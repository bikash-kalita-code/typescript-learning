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