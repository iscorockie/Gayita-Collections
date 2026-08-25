type P = { className?: string };
const base = "w-5 h-5";
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const IconBag = ({ className = base }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <path d="M6 8h12l-.8 11.2a2 2 0 0 1-2 1.8H8.8a2 2 0 0 1-2-1.8L6 8Z" />
    <path d="M9 10V6a3 3 0 0 1 6 0v4" />
  </svg>
);
export const IconMenu = ({ className = base }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <path d="M4 7h16M4 12h16M4 17h10" />
  </svg>
);
export const IconX = ({ className = base }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);
export const IconPhone = ({ className = base }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);
export const IconWhatsApp = ({ className = base }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.25-1.5A9.9 9.9 0 1 0 12.04 2Zm0 1.8a8.1 8.1 0 1 1-4.15 15.06l-.3-.18-3.1.9.9-3.03-.2-.31a8.1 8.1 0 0 1 6.85-12.44Zm-3.26 4.1c-.18 0-.47.07-.72.34-.25.26-.95.93-.95 2.26 0 1.33.96 2.61 1.1 2.79.14.18 1.9 3.04 4.69 4.14 2.32 1 2.8.8 3.3.75.5-.05 1.62-.66 1.85-1.3.23-.65.23-1.2.16-1.31-.07-.12-.25-.19-.53-.33-.27-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.61.14-.18.28-.7.88-.86 1.07-.16.18-.32.2-.6.07a7.4 7.4 0 0 1-2.2-1.36 8.2 8.2 0 0 1-1.52-1.9c-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.28-.46.09-.18.04-.34-.03-.48-.07-.14-.6-1.47-.83-2.01-.2-.47-.41-.4-.6-.41l-.61-.01Z" />
  </svg>
);
export const IconInstagram = ({ className = base }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="3.8" />
    <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);
export const IconTikTok = ({ className = base }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M16.6 3c.37 2.03 1.84 3.6 3.9 3.86v2.9a6.76 6.76 0 0 1-3.9-1.24v5.94A5.94 5.94 0 1 1 10.6 8.5c.34 0 .67.03 1 .08v3.05a2.9 2.9 0 1 0 2 2.78V3h3Z" />
  </svg>
);
export const IconStar = ({ className = "w-4 h-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="m12 2.6 2.9 5.9 6.5.95-4.7 4.58 1.1 6.47L12 17.45 6.2 20.5l1.1-6.47L2.6 9.45l6.5-.95L12 2.6Z" />
  </svg>
);
export const IconArrowRight = ({ className = base }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <path d="M4 12h15m0 0-6-6m6 6-6 6" />
  </svg>
);
export const IconArrowUpRight = ({ className = base }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <path d="M7 17 17 7m0 0H8m9 0v9" />
  </svg>
);
export const IconChevronLeft = ({ className = base }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <path d="M14 6l-6 6 6 6" />
  </svg>
);
export const IconChevronRight = ({ className = base }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <path d="m10 6 6 6-6 6" />
  </svg>
);
export const IconCheck = ({ className = base }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <path d="m4.5 12.5 5 5 10-11" />
  </svg>
);
export const IconTruck = ({ className = "w-6 h-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z" />
    <circle cx="7" cy="18" r="1.8" />
    <circle cx="17.5" cy="18" r="1.8" />
  </svg>
);
export const IconShield = ({ className = "w-6 h-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <path d="M12 3 4.5 6v5.5c0 4.5 3 7.8 7.5 9.5 4.5-1.7 7.5-5 7.5-9.5V6L12 3Z" />
    <path d="m8.8 12 2.2 2.2 4.2-4.4" />
  </svg>
);
export const IconBrush = ({ className = "w-6 h-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <path d="M20 4c-4.5.5-9 3-11.5 7.5L7 13l4 4 1.5-1.5C17 13 19.5 8.5 20 4Z" />
    <path d="M7.5 12.5c-2 .5-3.5 2-4 5 2.5.5 4.5-.5 5.5-2.5" />
  </svg>
);
export const IconRecycle = ({ className = "w-6 h-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <path d="m7 8-3 4 3 4M4 12h9M17 16l3-4-3-4M20 12h-9M12 5l2.5-2M12 19l-2.5 2" />
  </svg>
);
export const IconSearch = ({ className = base }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m16 16 4.5 4.5" />
  </svg>
);
export const IconMapPin = ({ className = base }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <path d="M12 21s-6.5-5.3-6.5-10a6.5 6.5 0 0 1 13 0c0 4.7-6.5 10-6.5 10Z" />
    <circle cx="12" cy="11" r="2.3" />
  </svg>
);
export const IconClock = ({ className = base }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);
export const IconMail = ({ className = base }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);
export const IconBolt = ({ className = "w-6 h-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
  </svg>
);
export const IconHeart = ({ className = base, filled = false }: P & { filled?: boolean }) => (
  <svg viewBox="0 0 24 24" className={className} fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20.3 4.8 13a4.9 4.9 0 0 1 0-6.9 4.8 4.8 0 0 1 6.9 0l.3.4.3-.4a4.8 4.8 0 0 1 6.9 0 4.9 4.9 0 0 1 0 6.9L12 20.3Z" />
  </svg>
);
export const IconBell = ({ className = base }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <path d="M6 9a6 6 0 0 1 12 0c0 5 2 6.5 2 6.5H4S6 14 6 9Z" />
    <path d="M10 19a2.2 2.2 0 0 0 4 0" />
  </svg>
);
export const IconLock = ({ className = base }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <rect x="5" y="11" width="14" height="9" rx="1.5" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
);
export const IconCrown = ({ className = "w-6 h-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="m2.5 8 4.5 3.5L12 5l5 6.5L21.5 8 20 18H4L2.5 8Z" />
  </svg>
);
export const IconFlame = ({ className = "w-6 h-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 22c4.4 0 7-2.8 7-6.5 0-3.2-2-5.3-3.5-7S13.5 5 14 2c-3.5 2-5.5 5-5.5 7.5 0 1.5.5 2.8 1 3.7C8.6 12.3 8 11 8 9c-1.8 1.8-3 4-3 6.5C5 19.2 7.6 22 12 22Z" />
  </svg>
);
