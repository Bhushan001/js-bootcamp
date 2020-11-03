class DS {
    constructor(x) {
        this.x = x;
    }
    static addDSTest(f, b) {
        return f.x + b.x + b.y;
    }
}
class Test extends DS {
    constructor(x, y) {
        super(x);
        this.y = y;
    }
}
let f = new DS(5);
let b = new Test(5, 5);
console.log(Test.addDSTest(f, b));

const array = [16, 32, 64, 128];
for (var i = 0; i < array.length; i++) {
    setTimeout(function() {
        console.log('Ind_Val: ' + i + ', elem: ' + array[i]);
    }, 3000);
}

const fn = a => console.log(a)

for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        fn(i);
    }, 0);
}

for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        fn(i);
    }, 0);
}


setTimeout(function() { console.log("hi") }, 1000)
setTimeout(function() { console.log("hi") }, 1000)
setTimeout(function() { console.log("hi") }, 1000)
setTimeout(function() { console.log("hi") }, 1000)
setTimeout(function() { console.log("hi") }, 1000)


function job(state) {
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve('Promise success');
        } else {
            reject('Promise error');
        }
    });
}
let promise = job(true);

promise
    .then(function(data) {
        console.log(data);
        return job(false);
    })

.catch(function(error) {
    console.log(error);
    return 'Promise Error caught';
})

.then(function(data) {
    console.log(data);
    return job(true);
})

.catch(function(error) {
    console.log(error);
});