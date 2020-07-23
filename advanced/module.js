function employee() {
    const state = {
        employeeName: 'Bhushan',
        email: 'bhushan@yahoo.com'
    };

    function getName() {
        return state.employeeName;
    }

    function getEmail() {
        return state.email;
    }

    return {
        state,
        getEmail,
        getName
    };
}

const emp = employee();
console.log(emp.getEmail());