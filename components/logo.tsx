import Image from "next/image";

export const Logo = () => {
  return (
    // <Link href="/public/logo_01.svg">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image
          src="/kogenielogo.svg"
          alt="Logo"
          height={99}
          width={99}
        />
      </div>
    // </Link>
  );
};
