const fetchData = async() => {
    const response = await axios.get('http://localhost:3000/movies');
    console.log(response.data);
};

fetchData();