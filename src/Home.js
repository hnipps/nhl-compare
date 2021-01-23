import React, { useEffect, useState } from "react";
import "./Home.css";
import {
  Box,
  Center,
  Flex,
  Grid,
  Heading,
  Img,
  Spinner,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import getSets from "./client/api/get-sets";
import getTeams from "./server/get-teams";
import PlayerCard from "./components/PlayerCard";

const Home = () => {
  const { isLoading: isSetsLoading, data: sets } = useQuery("sets", getSets);
  const { isLoading: isTeamsLoading, data: teams } = useQuery(
    "teams",
    getTeams
  );

  const isLoading = isSetsLoading || isTeamsLoading;

  return (
    <div className="Home">
      <Box h={16} mb={6} backgroundColor="blue.800" p={4}>
        <Flex h="100%" justifyContent="space-between" alignItems="center">
          <Heading as="h1" color="blue.100">
            Hockey Player Comparison
          </Heading>
        </Flex>
      </Box>
      {isLoading ? (
        <Spinner />
      ) : (
        <Stack p={4}>
          {sets.map(({ id, players }) => (
            <Box key={`set-${id}`} mb={8}>
              <Heading fontSize="3xl" mb={4} textAlign="left">
                Set {id}
              </Heading>
              <Grid templateColumns="repeat(6, 1fr)" gap={6}>
                {players.map((player, i) => (
                  <PlayerCard key={player.id} player={player} rank={i + 1} />
                ))}
              </Grid>
            </Box>
          ))}
        </Stack>
      )}
    </div>
  );
};

export default Home;
