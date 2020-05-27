module.exports = {
    getDeckListUrl: async ($) => {
        const deckUrl = $('h5')
            .filter(() => $(this).text().indexOf('Decks') > -1)
            .next()
            .find('a')
            .attr('href');

        return deckUrl;
    },
    parseDeck: async ($) => {
        const firstRow = $('tbody')
            .find('tr')
            .next();

        console.log(firstRow)
    },
};
