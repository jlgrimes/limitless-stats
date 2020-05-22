const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    apiToken: process.env.SMASHGG_API_TOKEN,
    apiUrlBase: 'https://api.smash.gg/gql/alpha'
};