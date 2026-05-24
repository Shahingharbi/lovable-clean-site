import { PhoneIcon } from "@/components/icons";

export function ChatBubble() {
  return (
    <a
      href="tel:+33684665523"
      aria-label="Appeler GH Services au 06 84 66 55 23"
      className="fixed bottom-6 right-6 z-[80] flex h-14 items-center gap-3 rounded-full bg-orange px-5 text-cream shadow-[0_18px_40px_-12px_rgba(37,99,235,0.6)] transition-transform hover:scale-105 md:px-6"
    >
      <span className="grid h-9 w-9 place-items-center rounded-full bg-cream/15">
        <PhoneIcon className="h-4 w-4" />
      </span>
      <span className="hidden font-display text-sm font-bold uppercase tracking-tight md:inline">
        Appeler
      </span>
    </a>
  );
}
