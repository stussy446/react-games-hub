import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody } from "@chakra-ui/card";
import { Image } from "@chakra-ui/image";
import { Heading, Text } from "@chakra-ui/layout";
import PlatformIconList from "./PlatformIconList";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
