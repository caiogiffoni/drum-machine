import { Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDisplay } from "../../providers/display";

interface IPad {
  src: {
    letter: string;
    audio: string;
  };
  power: boolean;
}

export const Drumpad = ({ src, power }: IPad) => {
  const { setDisplay } = useDisplay();

  const start = () => {
    if (!power) return;
    setDisplay(`Letter ${src.letter}`);
    const audio: HTMLVideoElement = document.querySelector(`#${src.letter}`)!;
    audio.play();
  };

  const pressedKey = (e: any) => {
    if (!power) return;
    setDisplay(`Letter ${src.letter}`);
    if (e.key.toLowerCase() === src.letter.toLowerCase()) {
      const audio: HTMLVideoElement = document.querySelector(`#${src.letter}`)!;
      audio.play();
      // audio.play().then((_) => setDisplay(`${src.letter}`));
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", pressedKey);
  }, []);

  return (
    <Box
      id={`box-${src.letter}`}
      bgColor="grey"
      w={["75px", "80px", "100px"]}
      h={["60px", "60px", "80px"]}
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
