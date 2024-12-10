import { Network, type BTCConfig, type WalletMetadata } from "@/core/types";

import type { BTCProvider } from "../BTCProvider";

import logo from "./logo.svg";
import { CactusLinkProvider } from "./provider";

const metadata: WalletMetadata<BTCProvider, BTCConfig> = {
  id: "cactus",
  name: "Cactus Link",
  icon: logo,
  docs: "https://chromewebstore.google.com/detail/cactus-link/chiilpgkfmcopocdffapngjcbggdehmj",
  wallet: "cactuslink",
  createProvider: (wallet, config) => new CactusLinkProvider(wallet, config),
  networks: [Network.MAINNET, Network.SIGNET],
};

export default metadata;
