const getTeams = () => fetch("/teams").then((res) => res.json());

export default getTeams;
