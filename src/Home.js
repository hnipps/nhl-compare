import React, { useEffect, useState } from "react";
import "./Home.css";
import {
  Box,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  Stack,
  VStack,
} from "@chakra-ui/react";

const Home = () => {
  const [sets, setSets] = useState([]);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const getSets = async () => {
      const sets = await fetch("/sets").then((res) => res.json());
      setSets(sets);
    };

    getSets();
  }, []);

  useEffect(() => {
    const getTeams = async () => {
      const teams = await fetch("/teams").then((res) => res.json());
      setTeams(teams);
    };

    getTeams();
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
        {sets.map(({ id, players }) => (
          <Box key={`set-${id}`} mb={8}>
            <Heading fontSize="3xl" mb={4} textAlign="left">
              Set {id}
            </Heading>
            <Grid templateColumns="repeat(6, 1fr)" gap={6}>
              {players.map(({ firstName, lastName, image, teamId }, i) => (
                <VStack
                  key={`${firstName}-${lastName}`}
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  padding={4}
                >
                  <Heading as="h3" fontSize="md">
                    {i + 1}
                  </Heading>
                  <Box position="relative">
                    <Image
                      borderRadius="full"
                      boxSize="150px"
                      src={image}
                      alt={`${firstName} ${lastName}`}
                    />
                    <Center
                      position="absolute"
                      bottom={0}
                      right={0}
                      backgroundColor="white"
                      borderRadius="full"
                      boxSize="50px"
                      p={1}
                    >
                      <Image
                        maxW="100%"
                        maxH="100%"
                        src={teams.find(({ id }) => id === teamId)?.logo}
                        alt={`${firstName} ${lastName}`}
                      />
                    </Center>
                  </Box>
                  <p>
                    {firstName} {lastName}
                  </p>
                </VStack>
              ))}
            </Grid>
          </Box>
        ))}
      </Stack>
    </div>
  );
};

export default Home;
