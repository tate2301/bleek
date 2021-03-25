import { Button, IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import { useToast } from "@chakra-ui/toast";
import { useState } from "react";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [email, setEmail] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const toast = useToast()


  const submit = () => {
    if(email) {
      setSubmitting(true)
      setTimeout(() => {
        setEmail("")
        setSubmitting(false)
        toast({
          title: "Congratulations",
          description: "You are all set. We will be in touch",
          status: "success"
        })
      }, 2000)
    } else {
      toast({
        title: "Sorry",
        description: "We need your email address to be able to notify you",
        status: "error"
      })
    }
  }

  return (
    <Flex mb={8} w="100vw" h="100vh" justifyContent="center" alignItems="center">
      <Box p={8} maxWidth={500}>
        <Flex justifyContent="space-between">
          <Heading fontWeight="bold" fontSize="6xl">bleek</Heading>
          <Flex>
            <Flex mr="2">
              <Tag colorScheme="yellow" size="lg" marginY="auto">Coming Soon</Tag>
            </Flex>
            <IconButton
              marginY="auto"
              aria-label="theme toggle"
              icon={colorMode === "light" ? <RiMoonFill /> : <RiSunLine />}
              onClick={toggleColorMode}
            />
          </Flex>
        </Flex>
        <Box py={4}>
          <Text>
            The intuitive social network for sharing code snippets.
            Boost productivity by at least 4,236,689%.
          </Text>
        </Box>
        <Box>
          <InputGroup size="md">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              pr="4.5rem"
              placeholder="Type your email to be notified"
            />
            <InputRightElement width="4.5rem">
              <Button isLoading={submitting} h="1.75rem" size="sm" onClick={() => submit()}>
                Add
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
      </Box>
    </Flex>
  );
};

export default Home;
