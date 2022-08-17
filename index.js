//for..of is used to iterate over arrays and strings

const myArray = ["a", "b", "c", "d", "e", "f", "g"];
for (const element of myArray) {
  console.log(element);
}

for (const letters of "HELLO WORLD!") {
  console.log(letters);
}

//for ...in is used to iterate over properties in objects.
// for (const [key] in [object]) {
//Code in the statement body
// }

const address = {
  street1: "11 Broadway",
  street2: "2nd Floor",
  city: "New York",
  state: "NY",
  zipCode: "10004",
};
for (const key in address) {
  console.log(key);
}

for (const value in address) {
  console.log(address[value]);
}
