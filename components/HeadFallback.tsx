import Head from "next/head";
import { usePathname } from "next/navigation";

export default function HeadFallback() {
  const pathname = usePathname();

  // Basic routing-based title logic
  const defaultTitle = pathname === "/"
    ? "Kogenie - AI-Powered Ads"
    : "Kogenie | AI Ad Generator";

  return (
    <Head>
      <title>{defaultTitle}</title>
    </Head>
  );
}
