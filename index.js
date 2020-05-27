const { fetchId, fetchEvent } = require('./scripts/event');
const { fetchPlayer, fetchDeck } = require('./scripts/axios');

const { getDeckListUrl, parseDeck } = require('./scripts/cheerio');

const run = async () => {
    let id = await fetchId('qualifier-3-by-pca-limitless-online-series');

    console.log('Fetching event...')
    let eventData = await fetchEvent(id);
    let standings = eventData.event.standings.nodes;

    console.log('Fetching decks...')
    for (let player of standings) {
        const playerHtml = await fetchPlayer(player.entrant.id);
        const deckUrl = await getDeckListUrl(playerHtml)
        const deckHtml = await fetchDeck(deckUrl)
        await parseDeck(deckHtml)
        
        player.entrant.deckUrl = deckUrl
        console.log(player)
    }
};

run();
