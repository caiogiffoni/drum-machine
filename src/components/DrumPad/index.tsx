import { Box, Text } from "@chakra-ui/react";

interface IPad {
  src: {
    letter: string;
    audio: string;
  };
}

export const Drumpad = ({ src }: IPad) => {
  const start = async () => {
    // let audio = new Audio(src.audio);
    // await audio.play();
    const audio: HTMLVideoElement = document.querySelector(`#${src.letter}`)!;
    audio.play();
  };
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
