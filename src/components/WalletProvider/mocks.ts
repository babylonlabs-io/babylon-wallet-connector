export const keplrRegistry = {
  chainId: "devnet-6",
  chainName: "Babylon Devnet 6",
  chainSymbolImageUrl:
    "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/bbn-dev/chain.png",
  rpc: "https://rpc.devnet.babylonlabs.io",
  rest: "https://lcd.devnet.babylonlabs.io",
  nodeProvider: {
    name: "Babylonlabs",
    email: "contact@babylonlabs.io",
    website: "https://babylonlabs.io/",
  },
  bip44: {
    coinType: 118,
  },
  bech32Config: {
    bech32PrefixAccAddr: "bbn",
    bech32PrefixAccPub: "bbnpub",
    bech32PrefixValAddr: "bbnvaloper",
    bech32PrefixValPub: "bbnvaloperpub",
    bech32PrefixConsAddr: "bbnvalcons",
    bech32PrefixConsPub: "bbnvalconspub",
  },
  currencies: [
    {
      coinDenom: "BBN",
      coinMinimalDenom: "ubbn",
      coinDecimals: 6,
      coinImageUrl: "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/bbn-dev/chain.png",
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "BBN",
      coinMinimalDenom: "ubbn",
      coinDecimals: 6,
      coinImageUrl: "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/bbn-dev/chain.png",
      gasPriceStep: {
        low: 0.007,
        average: 0.007,
        high: 0.01,
      },
    },
  ],
  stakeCurrency: {
    coinDenom: "BBN",
    coinMinimalDenom: "ubbn",
    coinDecimals: 6,
    coinImageUrl: "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/bbn-dev/chain.png",
  },
  features: ["cosmwasm"],
} as const;
