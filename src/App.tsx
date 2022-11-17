import { Box, Switch, Text } from "@chakra-ui/react";
import { useState } from "react";
import { audios } from "./assets/audio-source";
import reactLogo from "./assets/react.svg";
import { Drumpad } from "./components/DrumPad";
// import './App.css'

function App() {
  return (
    <Box
      w="100vw"
      h="100vh"
      bgColor="#8d8d8d"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        id="drum-machine"
        w="660px"
        h="316px"
        bgColor="#b3b3b3"
        outline="5px solid orange"
        display="flex"
      >
        <Box
          w="60%"
          h="100%"
          display="flex"
          justifyContent="flex-start"
          flexWrap="wrap"
          p="15px"
          gap="10px"
        >
          {audios &&
            audios.map((audio) => <Drumpad key={audio.letter} src={audio} />)}
        </Box>
        <Box id="display" w="40%">
          <Text>Power</Text>

          <Switch />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
