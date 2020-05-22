const { fetchId, fetchStandings } = require('./scripts/standings')

const run = async () => {
    let id = await fetchId('qualifier-3-by-pca-limitless-online-series')
    let standings = await fetchStandings(id)
    console.log(standings)
}

run()