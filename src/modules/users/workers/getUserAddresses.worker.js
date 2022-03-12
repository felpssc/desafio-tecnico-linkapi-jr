/* eslint-disable @typescript-eslint/no-var-requires */
const axios = require("axios");

const api = axios.create({
    baseURL: "https://62151ae9cdb9d09717adf48c.mockapi.io/api/v1/",
});

process.on("message", async (message) => {
    try {
        const addresses = await api.get(`users/${message.userId}/address`);

        process.send({
            addresses: addresses.data,
        });
    } catch (error) {
        console.error("Failed to find address", error);
    }
});