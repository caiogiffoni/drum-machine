import { Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";

interface IPad {
  src: {
    letter: string;
    audio: string;
  };
}

export const Drumpad = ({ src }: IPad) => {
  const start = () => {
    const audio: HTMLVideoElement = document.querySelector(`#${src.letter}`)!;
    audio.play();
  };

  const pressedKey = (e: any) => {
    if (e.key.toLowerCase() === src.letter.toLowerCase()) {
      const audio: HTMLVideoElement = document.querySelector(`#${src.letter}`)!;
      audio.play();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", pressedKey);
  });

  return (
    <Box
      id={`box-${src.letter}`}
      bgColor="grey"
      w="100px"
      h="80px"
      borderRadius="5px"
      boxShadow="black 3px 3px 5px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      _hover={{
        cursor: "pointer",
      }}
      className="drum-pad"
      onClick={() => start()}
    >
      <Text fontWeight="bold" fontSize="20px">
        {src.letter}
      </Text>
      <audio className="clip" id={src.letter} src={src.audio} />
    </Box>
  );
};
