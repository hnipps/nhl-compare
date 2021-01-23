const fetch = require("node-fetch");

// const getPlayers = () =>
//     fetch("http://54.158.170.220/api/v1/players", {
//     method: "POST",
//   }).then((res) => res.json());

const getPlayers = () =>
  fetch("http://localhost:3004/players").then((res) => res.json());

export default getPlayers;
