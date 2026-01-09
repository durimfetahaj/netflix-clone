import { Logo } from "@/components/logo";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative">
      <div className="absolute w-full">
        <Logo />
      </div>

      <Image
        alt="background-image"
        src="/background-image.jpg"
        fill
        priority
        className="object-cover hidden md:block"
      />

      <div className="absolute z-10 inset-0 bg-black/50" />

      <div className="relative flex flex-col min-h-screen">{children}</div>
    </main>
  );
}
