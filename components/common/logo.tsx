import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center space-x-3 group transition-transform hover:scale-105 shrink-0"
    >
      <Image
        src="/logo.png"
        alt="WoundWise Logo"
        width={300}
        height={32}
        className="h-8 w-auto object-contain"
        priority
      />
    </Link>
  );
}
