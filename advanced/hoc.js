const callNTimes = function(func, n) {
    for (let i = 0; i < n; i++) {
        func();
    }
}

function hello() {
    console.log('Hello');
}

function hi() {
    console.log('Hi');
}

// callNTimes(hello, 3);

const randomCall = function(func1, func2) {
    let rand = Math.random();
    if (rand < 0.5) {
        func1();
    } else {
        func2();
    }
}

randomCall(hello, hi);