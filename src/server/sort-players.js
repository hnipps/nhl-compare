const sortPlayers = (players) =>
  players.sort((a, b) => {
    if (!Boolean(a.stats && a.stats.goals)) {
      return 100;
    }

    if (!Boolean(b.stats && b.stats.goals)) {
      return -100;
    }

    return b.stats.goals - a.stats.goals;
  });

module.exports = { default: sortPlayers };
