"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { CampaignModal } from "./CampaignModal";

type ModalState = {
  isOpen: boolean;
  fleetName?: string;
};

type ModalContextValue = {
  open: (fleetName?: string) => void;
  close: () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ModalState>({ isOpen: false });

  const open = useCallback((fleetName?: string) => {
    setState({ isOpen: true, fleetName });
  }, []);

  const close = useCallback(() => {
    setState({ isOpen: false });
  }, []);

  return (
    <ModalContext.Provider value={{ open, close }}>
      {children}
      <CampaignModal isOpen={state.isOpen} fleetName={state.fleetName} onClose={close} />
    </ModalContext.Provider>
  );
}

export function useCampaignModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useCampaignModal must be used inside <ModalProvider>");
  return ctx;
}
