import {
  Box,
  Center,
  Grid,
  Heading,
  Img,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import getTeams from "../client/api/get-teams";

const PlayerCard = ({
  player: { firstName, lastName, image, teamId, stats },
  rank,
}) => {
  const { data: teams } = useQuery("teams", getTeams);
  const { logo, name: teamName } = teams.find(({ id }) => id === teamId);
  return (
    <VStack
      key={`${firstName}-${lastName}`}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      padding={5}
    >
      <Heading as="h3" fontSize="md">
        {rank}
      </Heading>
      <Box position="relative">
        <Img
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
          <Img maxW="100%" maxH="100%" src={logo} alt={`${teamName} logo`} />
        </Center>
      </Box>
      <Heading as="h4" fontSize="lg" mb={6}>
        {firstName} {lastName}
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={2} w="100%">
        <Stat>
          <StatLabel>Goals</StatLabel>
          <StatNumber>{stats.goals || "N/A"}</StatNumber>
          <StatHelpText>2019-2020</StatHelpText>
        </Stat>
      </Grid>
    </VStack>
  );
};

export default PlayerCard;
