// app/(platform)/redirect-after-facebook/page.tsx

import dynamic from "next/dynamic";
import { Suspense } from "react";

const RedirectClient = dynamic(() => import("./RedirectClient"), { ssr: false });

export default function RedirectAfterFacebookPage() {
  return (
    <Suspense fallback={<p className="text-center mt-10 text-lg">Redirecting...</p>}>
      <RedirectClient />
    </Suspense>
  );
}