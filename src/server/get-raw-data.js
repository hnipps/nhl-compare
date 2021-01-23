const fetch = require("node-fetch");

const getRawData = () =>
  // fetch("http://localhost:3004/raw-data").then((res) => res.json());
  fetch("http://54.158.170.220/api/v1/players", {
    method: "POST",
  }).then((res) => res.json());

module.exports = { default: getRawData };
