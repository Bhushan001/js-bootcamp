const fruits = ['mango', 'orange', 'banana', 'watermelon',
    'mango', 'banana',
    'mango', 'watermelon',
    'mango', 'orange', 'watermelon'
];


const findMaxOccurences = (fruits) => {
    const fruitsMap = {};
    fruits.forEach((fruit) => {
        fruitsMap[fruit] = !fruitsMap[fruit] ? 1 : ++fruitsMap[fruit];

        // if (!fruitsMap[fruit]) {
        //     fruitsMap[fruit] = 1;
        // } else {
        //     fruitsMap[fruit]++;
        // }
    });
    for (const key in fruitsMap) {
        let max = 0;
        if (fruitsMap.hasOwnProperty(key)) {
            if (fruitsMap[key] > max) {}

        }
    }
}

findMaxOccurences(fruits);

// mango : 4