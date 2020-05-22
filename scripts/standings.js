const fetch = require('node-fetch');
const { apiUrlBase, apiToken } = require('../config');
const standings = require('../schemas/standings');

module.exports = {
    // todo - make this into graph QL
    fetchId: async (name) => {
        const url = `https://api.smash.gg/tournament/${name}?expand[]=phase&expand[]=groups&expand[]=event`;
        const response = await fetch(url);
        const data = await response.json();

        return data.entities.event[0].id;
    },
    fetchStandings: async (id) => {
        const response = await fetch(apiUrlBase, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${apiToken}`,
            },
            body: JSON.stringify({
                query: standings.query,
                operationName: standings.operationName,
                variables: standings.variables(id, 1),
            }),
        });
        const data = await response.json();

        return data;
    },
};
