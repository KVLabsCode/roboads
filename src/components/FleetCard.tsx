"use client";

import { useState } from "react";
import type { Fleet } from "@/lib/fleets";
import { useCampaignModal } from "./ModalProvider";

type Props = { fleet: Fleet };

export function FleetCard({ fleet }: Props) {
  const { open } = useCampaignModal();
  const [errored, setErrored] = useState(false);

  return (
    <button
      type="button"
      onClick={() => open(fleet.name)}
      className="group block w-full text-left bg-cream border border-line hover:border-gold transition-all duration-200"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-bg">
        {!errored ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={fleet.imageUrl}
            alt={`${fleet.name} robot`}
            loading="lazy"
            onError={() => setErrored(true)}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-cream">
            <span className="font-display text-8xl text-line select-none">
              {fleet.initials}
            </span>
          </div>
        )}
        {fleet.designPartner && (
          <span className="absolute top-3 right-3 bg-gold text-ink text-[9px] uppercase tracking-widest font-medium px-2 py-1">
            Design Partner
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg text-ink leading-snug">
          {fleet.name}
        </h3>
        <p className="mt-1 text-[10px] uppercase tracking-widest text-mute">
          {fleet.coverage} · {fleet.fleetSize}
        </p>
      </div>
    </button>
  );
}
