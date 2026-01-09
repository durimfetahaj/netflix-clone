import Image from "next/image";

export const Logo = () => {
  return (
    <div className="mx-auto flex w-full max-w-7xl items-center p-2 md:px-6 md:py-4 relative z-30 ">
      <Image src="/logo.png" alt="Logo" width={148} height={40} />
    </div>
  );
};
