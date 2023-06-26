// JS code

// NOTE: If you insert two exactly same elements in a set only the first will get inserted

// new Set() : Creating a new set
const set1: Set<string> = new Set();

// sets are objects
console.log(typeof set1); // object

// for a set, instanceof Set returns true
console.log(set1 instanceof Set); // true

// add() : Adding elements to the set
set1.add("data1");
set1.add("data2");
set1.add("data2"); // NOTE: Although data2 is inserted twice or more than once, it will only occur once in the set
set1.add("data3");
set1.add("data4");
set1.add("data5");
set1.add("data6");

// Initializing a set with values
const set2:Set<number | string> = new Set([10, 20, 30, 40, 50, "str value"]);

// .size : Set property, which returns the number of unique elements in a set
console.log(set1.size);


console.log(set1); // Set(6) { 'data1', 'data2', 'data3', 'data4', 'data5', 'data6' }
console.log(set2); // Set(5) { 10, 20, 30, 40, 50 }

// values() : Returns an iterator with all the values in the set
console.log(set1.values()); // [Set Iterator] { 'data1', 'data2', 'data3', 'data4', 'data5', 'data6' }
const myIterator1 = set1.values();
for (const entry of myIterator1) {
  console.log(entry);
}


// keys() : A set has no keys. So, keys() return same as values()
console.log(set1.keys()); // [Set Iterator] { 'data1', 'data2', 'data3', 'data4', 'data5', 'data6' }

// entries() : Returns an iterator with the [value, value] pairs from a Set
// Since, a set has no keys, so instead of [key, value] pairs, it returns [value, value] pairs
console.log(set1.entries());

// delete() : Removing element from set
set1.delete("data1");
console.log(set1);  // Set(5) { 'data2', 'data3', 'data4', 'data5', 'data6' }

// has() : Returns true if a value exists
console.log(set1.has("data1")); // false
console.log(set1.has("data2")); // true

// forEach() : invokes a callback for each element
set1.forEach((element) => console.log(element));

// clear() : removes all element from the set
set1.clear();
console.log(set1);  // Set(0) {}

// Chaining of set method
const set3 = new Set();
set3.add('user1').add('user2').add('user3').add('user2').add('user4');
console.log(set3);