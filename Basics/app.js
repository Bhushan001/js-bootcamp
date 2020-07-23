function filledOrders(orders, limit) {
    sortedOrders = orders.sort(function(a, b) {
        return a - b;
    });
    console.log(sortedOrders);
    let counter = 0;
    for (let i = 0; i < sortedOrders.length; i++) {
        let element = sortedOrders[i];
        if (limit - element === 0) {
            counter++;
            return counter;
        } else if (limit - element < 0) {
            console.log(limit + '-' + element);
            return counter;
        } else {
            limit = limit - element;
            counter++;
        }
    }
    return counter;
}

let loopCounter = 1;
let orders = [8526325, 4867889,
    8459224,
    3142131,
    9022648,
    4681201,
    3069980,
    7567872,
    8928157,
    4199985,
    3978583,
    8896023,
    9897954,
    3337377,
    60730,
    6728438,
    6560134,
    7127216,
    4662643,
    6798622,
    4460887,
    6785305,
    2658899,
    5800236,
    5519679,
    3179685,
    7603035,
    2088980,
    1189200,
    9460865,
    1809865,
    9715524,
    6845105,
    2785441,
    2857655,
    8384104,
    9982993,
    8443986,
    5951975,
    8911149,
    5160323,
    2446910,
    323523,
    5058276,
    5784286,
    2900604,
    1786713,
    4860771,
    2544171,
    8965707,
    1659393,
    7005058,
    8267364,
    6834643,
    2805293,
    3787042,
    14327,
    2924680,
    5876021,
    3719879,
    4901896,
    202237,
    3435402,
    1747001,
    2987677,
    8809408,
    131104,
    5487021,
    7253394,
    8599431,
    6914521,
    4930068,
    1046340,
    7238043,
    9988343,
    9346977
];
let limit = 399720886;
for (let i = 0; i < loopCounter; i++) {
    console.log(filledOrders(orders, limit));
}