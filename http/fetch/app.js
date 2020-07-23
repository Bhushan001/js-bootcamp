fetch('https://swapi.com/api/planets/', { mode: "no-cors" }).then(
    (res) => {
        console.log(res.statusText);
    }
).catch(
    (err) => {
        console.log(err);
    }
);