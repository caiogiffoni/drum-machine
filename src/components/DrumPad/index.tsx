import { Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDisplay } from "../../providers/display";

interface IPad {
  src: {
    letter: string;
    audio: string;
  };
}

export const Drumpad = ({ src }: IPad) => {
  const { display, setDisplay } = useDisplay();

  const start = () => {
    const audio: HTMLVideoElement = document.querySelector(`#${src.letter}`)!;
    audio.play().then((_) => setDisplay(`Letra ${src.letter}`));
  };

  const pressedKey = (e: any) => {
    if (e.key.toLowerCase() === src.letter.toLowerCase()) {
      const audio: HTMLVideoElement = document.querySelector(`#${src.letter}`)!;
      audio.play().then((_) => setDisplay(`Letra ${src.letter}`));
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
