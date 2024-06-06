const axios = require("axios").default;

const url = "https://jsonplaceholder.typicode.com/users/3";
const resultingPromise = axios.get(url);
