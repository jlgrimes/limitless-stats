const fetch = require('node-fetch');
const { apiUrlBase, apiToken } = require('../config');
const event = require('../schemas/event');

module.exports = {
    // todo - make this into graph QL
    fetchId: async (name) => {
        const url = `https://api.smash.gg/tournament/${name}?expand[]=phase&expand[]=groups&expand[]=event`;
        const response = await fetch(url);
        const data = await response.json();

        return data.entities.event[0].id;
    },
    fetchEvent: async (id) => {
        const response = await fetch(apiUrlBase, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${apiToken}`,
            },
            body: JSON.stringify({
                query: event.query,
                operationName: event.operationName,
                variables: event.variables(id, 1),
            }),
        });
        let data = await response.json();

        // if it's a valid response actually get the data
        if (data.data) {
            data = data.data;
        }

        return data;
    },
};
