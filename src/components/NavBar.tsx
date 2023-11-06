import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import { ConnectButton } from "@particle-network/connect-react-ui";
import "@particle-network/connect-react-ui/dist/index.css";
import { useConnectKit } from "@particle-network/connect-react-ui";

export const NavBar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  //use this in react component.
  const connectKit = useConnectKit();
  console.log('connectKit: ', connectKit);
  // To set target and features for custom window style, same as window.open().
  // connectKit.particle.openBuy();
  return (
    <Box h="40px">
      <Flex>
        <Box>
          <Heading size={"lg"}>
            <a href="https://zoomer.money">/TAKE_ME_HOME</a>
          </Heading>
        </Box>
        <Spacer />
        <Flex direction={"row"}>
          <IconButton
            colorScheme={colorMode === "light" ? "blackAlpha" : "yellow"}
            mr={5}
            onClick={toggleColorMode}
            aria-label="Toggle color mode"
            icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
          />
          <Box>
            <ConnectButton />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
