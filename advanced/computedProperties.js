const role = 'host';
const person = 'Bhushan';


let team = {
    role: person
};
console.log(team);

team = {};
team[role] = 'person';
console.log(team);

team = {
    [role]: person
};
console.log(team);

const addProp = (obj, k, v) => ({...obj, [k]: v });
const res = addProp(team, 'name', 'Gadeakr');
console.log(res);