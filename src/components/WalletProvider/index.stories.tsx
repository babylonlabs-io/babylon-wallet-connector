import type { Meta, StoryObj } from "@storybook/react";
import { Button, ScrollLocker } from "@babylonlabs-io/bbn-core-ui";

import { useWidgetState } from "@/hooks/useWidgetState";
import { Network } from "@/core/types";

import { WalletProvider } from "./index";
import { keplrRegistry } from "./mocks";

const meta: Meta<typeof WalletProvider> = {
  component: WalletProvider,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

const config = [
  {
    chain: "BTC",
    config: {
      coinName: "Signet BTC",
      coinSymbol: "sBTC",
      networkName: "BTC signet",
      mempoolApiUrl: "https://mempool.space/signet",
      network: Network.SIGNET,
    },
  },
  {
    chain: "BBN",
    config: keplrRegistry,
  },
] as const;

export const Default: Story = {
  args: {
    onError: console.log,
  },
  decorators: [
    (Story) => (
      <ScrollLocker>
        <WalletProvider context={window.parent} config={config}>
          <Story />
        </WalletProvider>
      </ScrollLocker>
    ),
  ],
  render: () => {
    const { open } = useWidgetState();

    return <Button onClick={open}>Connect Wallet</Button>;
  },
};
