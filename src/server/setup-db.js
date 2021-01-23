const fetch = require("node-fetch");
const { default: getRawData } = require("./get-raw-data");
const { default: getStats } = require("./get-stats");
const { default: mapPlayerStats } = require("./map-player-stats");
const { default: sortPlayers } = require("./sort-players");
const { default: transformRawData } = require("./transform-raw-data");

const setupDB = async () => {
  const rawData = await getRawData();
  const { sets, teams } = transformRawData(rawData);

  console.log(JSON.stringify(sets));

  fetch("http://localhost:3004/teams", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(teams),
  });

  const stats = await getStats();

  sets.forEach((setItem, i) => {
    const playerStats = mapPlayerStats(setItem.players, stats);
    const sortedPlayers = sortPlayers(playerStats);

    fetch(`http://localhost:3004/sets/${i + 1}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...setItem, players: sortedPlayers }),
    });
  });
};

setupDB();
