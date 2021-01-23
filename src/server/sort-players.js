const sortPlayers = (players) =>
  players.sort((a, b) => b?.stats?.goals - a?.stats?.goals);

export default sortPlayers;
