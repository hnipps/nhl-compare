const getSets = () => fetch("/sets").then((res) => res.json());

export default getSets;
