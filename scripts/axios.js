const axios = require('axios');
const cheerio = require('cheerio')

module.exports = {
    fetchPlayer: async (id) => {
        const url = `https://smash.gg/tournament/qualifier-3-by-pca-limitless-online-series/event/qualifier-3/entrant/${id}`;
        const { data } = await axios.get(url);
        return cheerio.load(data);
    },
    fetchDeck: async (url) => {
        const { data } = await axios.get(url);
        return cheerio.load(data);
    }
};
