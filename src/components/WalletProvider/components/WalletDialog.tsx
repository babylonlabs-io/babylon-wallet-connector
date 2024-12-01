import { useCallback } from "react";
import { Dialog } from "@babylonlabs-io/bbn-core-ui";

import { useWidgetState } from "@/hooks/useWidgetState";
import { useWalletWidgets } from "@/hooks/useWalletWidgets";
import { useChainProviders } from "@/context/Chain.context";
import { useInscriptionProvider } from "@/context/Inscriptions.context";

import { Screen } from "./Screen";
import { useWalletConnectors } from "@/hooks/useWalletConnectors";

interface WalletDialogProps {
  onError?: (e: Error) => void;
  config: any;
}

const ANIMATION_DELAY = 1000;

export function WalletDialog({ config, onError }: WalletDialogProps) {
  const { visible, screen, close, reset = () => {}, confirm, displayChains } = useWidgetState();
  const { toggleShowAgain, toggleLockInscriptions } = useInscriptionProvider();
  const connectors = useChainProviders();
  const walletWidgets = useWalletWidgets(connectors, config);
  const { connect, disconnect } = useWalletConnectors(onError);

  const handleToggleInscriptions = useCallback(
    (lockInscriptions: boolean, showAgain: boolean) => {
      toggleShowAgain?.(showAgain);
      toggleLockInscriptions?.(lockInscriptions);
      displayChains?.();
    },
    [toggleShowAgain, toggleLockInscriptions, displayChains],
  );

  const handleClose = useCallback(() => {
    close?.();
    setTimeout(reset, ANIMATION_DELAY);
  }, [close, reset]);

  const handleConfirm = useCallback(() => {
    confirm?.();
    close?.();
  }, [confirm]);

  return (
    <Dialog open={visible} onClose={handleClose}>
      <Screen
        current={screen}
        widgets={walletWidgets}
        className="b-size-[600px]"
        onClose={handleClose}
        onConfirm={handleConfirm}
        onSelectWallet={connect}
        onAccepTermsOfService={displayChains}
        onToggleInscriptions={handleToggleInscriptions}
        onDisconnectWallet={disconnect}
      />
    </Dialog>
  );
}
