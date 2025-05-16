import Head from "next/head";
import { usePathname } from "next/navigation";

export default function HeadFallback() {
  const pathname = usePathname();

  let title = "Kogenie | AI Ad Generator";

  if (pathname === "/") {
    title = "Kogenie - AI-Powered Ads for Every Kind of Customer";
  } else if (pathname === "/policy/privacy") {
    title = "KOgenie Privacy Policy | How We Collect, Use & Protect Your Data";
  } else if (pathname === "/policy/cookie") {
    title = "Cookie Policy | KOgenie’s Use of Cookies & Tracking Tools";
  } else if (pathname === "/policy/refund") {
    title = "Refund Policy | KOgenie’s Money-Back & Cancellation Terms";
  } else if (pathname === "/sign-in") {
    title = "Sign In to KOgenie | Secure Access to Your Dashboard";
  } else if (pathname === "/sign-up") {
    title = "Join KOgenie | Create Your Account and Start Creating Ads";
  }

  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}
