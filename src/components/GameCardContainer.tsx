import { Box } from "@chakra-ui/layout";
import { ReactNode } from "react";

interface GameCardContainerProps {
  children: ReactNode;
}

const GameCardContainer = ({ children }: GameCardContainerProps) => {
  return (
    <Box width="300px" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
