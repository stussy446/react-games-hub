import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid
      gridTemplateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={"main"}></GridItem>
      <GameGrid />
    </Grid>
  );
}

export default App;
