const fetch = require("node-fetch");

const getStats = () =>
  fetch(
    "https://datacrunch.9c9media.ca/statsapi/sports/hockey/leagues/nhl/sortablePlayerSeasonStats/skater?brand=tsn&type=json&seasonType=regularSeason&season=2019"
  ).then((res) => res.json());

module.exports = { default: getStats };
