const mapPlayerStats = (players, stats) =>
  players.map((player) => {
    const playerStats = stats.find(
      ({ stats: nestedStats }) =>
        nestedStats.lastName === player.lastName &&
        nestedStats.firstName === player.firstName
    );

    return {
      ...player,
      stats: playerStats?.stats,
    };
  });

export default mapPlayerStats;
