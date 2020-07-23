const person = {
        first: 'Bhushan',
        last: 'Gadekar',
        fullName() {
            const { first, last } = this;
            return `${first} - ${last}`;
        },
        laugh: () => {
            console.log(this);
            console.log(`${this.name} asyd`);

        }
    }
    // if i executed fulname as person.fullName() it will work correctly, because only in that case 'this' points to person object.
    // in global context , it wont work becuase 'this' will hold window object which dont have fullName method defined
console.log(person.fullName());
person.laugh();