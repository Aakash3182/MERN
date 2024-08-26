/* object -> group of properties

prototype
    let object = {
        key: value,
        key: value
    }
*/

let user = {
  name: "John",
  age: 22,
  isUser: true,
  hobbies: ["riding", "driving", "cycling"],
  bank: {
    name: "SBI",
  },
  getUser: function () {
    return `My name is ${this.name}`;
  },
};

console.log(`username = `, user.name);
console.log(`age = `, user["age"]);
console.log(`isUser = `, user["isUser"]);

user.hobbies.forEach((item, index) => {
  document.write(`<h1> ${index} ${item} </h1>`);
});

document.write(`<h2>bank name = ${user.bank.name} </h2>`);
document.write(`<h2> method = ${user.getUser()} </h2>`);
