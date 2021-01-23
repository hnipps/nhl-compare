const transformRawData = (rawData) => {
  return {
    sets: rawData.sets,
    teams: rawData.games.reduce((acc, { teams: { home, away } }) => {
      acc.push(home, away);
      return acc;
    }, []),
  };
};

module.exports = { default: transformRawData };
