// JavaScript Object Constructor (Constructor Function)

function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName = function () {
        return this.firstName + ' ' + this.lastName + ' is ' + this.age + ' old';
    }
}
const amima = new Person('Amima', 'Hoque', 9);
const arkam = new Person('Arkam', 'Hoque', 6);
const zarif = new Person('Zarif', 'Abdullah', 5);

console.log(zarif.fullName());
console.log(amima.fullName());