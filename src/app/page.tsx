"use client";

import {
  VStack,
  Box,
  Flex,
  Spacer,
  Button,
  LinkOverlay,
  LinkBox,
  Image,
  useColorMode,
} from "@chakra-ui/react";

import { NavBar } from "../components/NavBar";
import { ZOOMER_YELLOW } from "@/utils/colors";

const Page = () => {
  const { colorMode } = useColorMode();
  return (
    <VStack
      spacing={4}
      align="stretch"
      p={4}
      backgroundColor={
        colorMode === "light" ? ZOOMER_YELLOW : "black"
      }
      textColor={colorMode === "light" ? "black" : ZOOMER_YELLOW}
      minHeight={"640px"}
    >
      <NavBar />
      <Flex>
        <Spacer />
        <Box width={{ base: "100%", md: "640px" }}>
          <LinkBox>
            <Button
              width="100%"
              backgroundColor={
                colorMode === "light" ? "black" : ZOOMER_YELLOW
              }
              color={
                colorMode === "light" ? ZOOMER_YELLOW : "black"
              }
              mt={4}
            >
              <LinkOverlay href={""} isExternal>
                BUY ZOOMER
              </LinkOverlay>
            </Button>
          </LinkBox>
        </Box>
        <Spacer />
      </Flex>
      <Flex>
        <Spacer />
      </Flex>
    </VStack>
  );
};

export default Page;
