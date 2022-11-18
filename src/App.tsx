import { Box, Switch, Text } from "@chakra-ui/react";
import { audios } from "./assets/audio-source";
import { Drumpad } from "./components/DrumPad";
import { useDisplay } from "./providers/display";

function App() {
  const { display } = useDisplay();
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
        <Box
          w="40%"
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Text mt="25px">Power</Text>
          <Switch defaultChecked />
          <Box w="200px" p="15px" bgColor="gray" m="15px">
            <Text id="display" textAlign="center" minH="24px">
              {display}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
