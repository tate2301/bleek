import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Flex } from "@chakra-ui/layout";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex mb={8} w="screen" h="screen" justifyContent="center">
      <IconButton
            aria-label="theme toggle"
            icon={colorMode === "light" ? <RiMoonFill /> : <RiSunLine />}
            onClick={toggleColorMode}
          />
    </Flex>
  );
};

export default Home;
