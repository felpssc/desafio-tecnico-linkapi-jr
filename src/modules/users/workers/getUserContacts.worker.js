/* eslint-disable @typescript-eslint/no-var-requires */
const axios = require("axios");

const child_process = require("child_process");

const api = axios.create({
    baseURL: "https://62151ae9cdb9d09717adf48c.mockapi.io/api/v1/",
});

process.on("message", async (message) => {
    try {
        const contacts = await api.get(`users/${message.userId}/contacts`);

        process.send({
            contacts: contacts.data,
        });
    } catch (error) {
        if (error.response.status === 429) {
            const worker = child_process.fork("src/modules/users/workers/getUserContacts.worker.js");

            worker.send({
                userId: message.userId,
            });

            worker.on("message", (message) => {
                process.send({
                    contacts: message.contacts,
                });
            });
        } else {
            console.log(error);
        }
    }
});