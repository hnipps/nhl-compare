import fetch from "node-fetch";

const getTeams = () =>
  fetch("http://localhost:3004/teams").then((res) => res.json());

export default getTeams;
