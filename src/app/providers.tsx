"use client";

import * as React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ModalProvider } from "@particle-network/connect-react-ui";
import { WalletEntryPosition } from "@particle-network/auth";
import { Ethereum, EthereumGoerli } from "@particle-network/chains";
import { evmWallets } from "@particle-network/connect";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <ChakraProvider
      theme={extendTheme({
        initialColorMode: "light",
        useSystemColorMode: true,
        styles: {
          global: () => ({
            html: {
              overflowX: "hidden",
            },
            body: {
              overflowX: "hidden",
            },
          }),
        },
      })}
    >
      <ModalProvider
        options={{
          projectId: "b95718e4-9908-4713-aeae-a7d7335d50c6",
          clientKey: "cMFZFc1bjWCdA1ovSAqC3woyITD0oMuy69LLFVR7",
          appId: "c37c1fb9-a608-4386-b032-763e2e258d5e",
          chains: [Ethereum, EthereumGoerli],
          particleWalletEntry: {
            //optional: particle wallet config
            displayWalletEntry: true, //display wallet button when connect particle success.
            defaultWalletEntryPosition: WalletEntryPosition.BR,
            supportChains: [Ethereum, EthereumGoerli],
            customStyle: {}, //optional: custom wallet style
          },
          securityAccount: {
            //optional: particle security account config
            //prompt set payment password. 0: None, 1: Once(default), 2: Always
            promptSettingWhenSign: 1,
            //prompt set master password. 0: None(default), 1: Once, 2: Always
            promptMasterPasswordSettingWhenLogin: 1,
          },
          wallets: evmWallets({
            projectId: "296a55745d9880bb16e1386b1b0eb360", //replace with walletconnect projectId
            showQrModal: false,
          }),
        }}
        theme={"auto"}
        language={"en"} //optional：localize, default en
        walletSort={["Particle Auth", "Wallet"]} //optional：walelt order
        particleAuthSort={[
          //optional：display particle auth items and order
          "email",
          "phone",
          "google",
          "apple",
          "facebook",
        ]}
      >
        {mounted && children}
      </ModalProvider>
    </ChakraProvider>
  );
}
