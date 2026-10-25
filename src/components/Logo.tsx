import Image from "next/image";
import logoMark from "@/assets/logo-mark.png";

export default function Logo() {
  return (
    <a href="#" className="group flex items-center gap-2.5 focus:outline-none">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-outline-variant/40 transition-shadow group-hover:shadow-md">
        <Image
          src={logoMark}
          alt="Raybon Tech Solutions logo"
          className="h-full w-full object-contain"
          priority
        />
      </span>
      <span className="text-headline-sm tracking-tight text-on-surface transition-colors group-hover:text-primary">
        Raybon<span className="font-bold text-primary">Tech</span>
      </span>
    </a>
  );
}
