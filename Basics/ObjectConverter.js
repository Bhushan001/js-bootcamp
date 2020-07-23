let employee = {
    firstName: "Bhushan",
    lastName: "Gadekar",
    age: 26,
    gender: 'male'
};
let objArr = [];
for (const key of Object.keys(employee)) {
    let obj = {
        key: key,
        value: employee[key]
    };
    objArr.push(obj);
}
for (const property of objArr) {
    console.log(`property : ${property.key} =>  value : ${property.value}`);
}