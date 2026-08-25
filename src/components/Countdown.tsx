import { useEffect, useState } from "react";
import { nextDropDate } from "../lib/utils";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export default function Countdown({ compact = false }: { compact?: boolean }) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const t = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(t);
  }, []);

  const target = nextDropDate(now);
  const diff = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const mins = Math.floor((diff % 3_600_000) / 60_000);
  const secs = Math.floor((diff % 60_000) / 1000);

  const units: [string, string][] = [
    [pad(days), "DAYS"],
    [pad(hours), "HRS"],
    [pad(mins), "MINS"],
    [pad(secs), "SECS"],
  ];

  return (
    <div className={compact ? "flex items-end gap-2" : "flex items-end gap-2 sm:gap-3"}>
      {units.map(([val, label], i) => (
        <div key={label} className="flex items-end gap-2 sm:gap-3">
          <div className="text-center">
            <div
              className={
                compact
                  ? "min-w-[44px] border border-bone/15 bg-smoke2 px-2 py-1.5 font-display text-xl text-volt tabular-nums"
                  : "min-w-[62px] border border-bone/15 bg-smoke2 px-3 py-2.5 font-display text-3xl text-volt tabular-nums sm:min-w-[74px] sm:text-4xl"
              }
            >
              {val}
            </div>
            <p className="mt-1.5 font-mono text-[9px] font-bold tracking-[0.25em] text-bone/45">{label}</p>
          </div>
          {i < units.length - 1 && (
            <span className={compact ? "pb-5 font-display text-lg text-bone/30" : "pb-6 font-display text-2xl text-bone/30"}>:</span>
          )}
        </div>
      ))}
    </div>
  );
}
