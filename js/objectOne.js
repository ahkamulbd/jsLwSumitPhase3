myObj = {
    name: "John",
    profession: "Doctor",
    age: 30,
    cars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    }
}
delete myObj.profession;

//console.log(myObj);
//console.log(myObj.cars.car3);

const myObject = {
    name: "John",
    age: 30,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] }
    ]
}
//console.log(myObject.cars[0].models);
for (let objElement in myObject.cars[0].models[0]) {
    //console.log(objElement);
    //console.log(objElement);
    //console.log(objElement);
}
//console.log(myObj.cars[objElement]);

const student = new Object();

student.name = 'Sakib';
student.age = 13;
student.classStudied = '7th';
student.gender = 'boy';
student.passed = true;

//console.log(student);

const personThis = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
console.log(personThis.fullName());
