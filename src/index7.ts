type StringOrNumber = string | number;

type PersonObject = {
    name: string;
    id: StringOrNumber;
}

const person6: PersonObject = {
    name: 'John',
    id: 1,
}

const person7: PersonObject = {
    name: 'Delia',
    id: 2,
}

const sayHello2 = (person: PersonObject) => {
    return 'Hi ' + person.name;
}