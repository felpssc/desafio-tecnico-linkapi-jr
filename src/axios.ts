import axios from "axios";

const api = axios.create({
    baseURL: "https://62151ae9cdb9d09717adf48c.mockapi.io/api/v1/",
});

export { api };