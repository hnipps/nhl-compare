import React, { useEffect, useState } from "react";
import logo from "./react.svg";
import "./Home.css";
import { Box, Container, Flex, Grid, Heading, Stack } from "@chakra-ui/react";

const Home = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const getPlayers = async () => {
      const players = await fetch("/players").then((res) => res.json());
      console.log(players);
      setPlayers(players.sets[0].players);
    };

    getPlayers();
  }, []);

  return (
    <div className="Home">
      <Box h={16} mb={6} backgroundColor="blue.800" p={4}>
        <Flex h="100%" justifyContent="space-between" alignItems="center">
          <Heading as="h1" color="blue.100">
            Hockey Player Comparison
          </Heading>
        </Flex>
      </Box>
      <Stack p={4}>
        <Box mb={8}>
          <Heading fontSize="3xl" mb={4} textAlign="left">
            Set 1
          </Heading>
          <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            {players.map(({ firstName, lastName }, i) => (
              <Box
                key={`${firstName}-${lastName}`}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Heading as="h3" fontSize="md">
                  {i + 1}
                </Heading>
                <p>
                  {firstName} {lastName}
                </p>
              </Box>
            ))}
          </Grid>
        </Box>
        <Box mb={8}>
          <Heading fontSize="3xl" mb={4} textAlign="left">
            Set 2
          </Heading>
          <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            {players.map(({ firstName, lastName }, i) => (
              <Box
                key={`${firstName}-${lastName}`}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Heading as="h3" fontSize="md">
                  {i + 1}
                </Heading>
                <p>
                  {firstName} {lastName}
                </p>
              </Box>
            ))}
          </Grid>
        </Box>
        <Box mb={8}>
          <Heading fontSize="3xl" mb={4} textAlign="left">
            Set 3
          </Heading>
          <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            {players.map(({ firstName, lastName }, i) => (
              <Box
                key={`${firstName}-${lastName}`}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Heading as="h3" fontSize="md">
                  {i + 1}
                </Heading>
                <p>
                  {firstName} {lastName}
                </p>
              </Box>
            ))}
          </Grid>
        </Box>
      </Stack>
    </div>
  );
};

export default Home;
