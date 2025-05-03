// app/organization/layout.tsx or wherever OrganizationLayout is

"use client";
import { Sidebar } from "../_components/sidebar";
import { usePathname } from "next/navigation";

const OrganizationLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const shouldShowSidebar = pathname.includes("/organization/") && pathname.includes("/createAd");

  return (
    <main className="pt-20 md:pt-24 px-4 max-w-6l 2xl:max-w-screen-xl mx-auto">
      <div className="flex gap-x-7">
        {shouldShowSidebar && (
          <div className="w-64 shrink-0 hidden md:block">
            <Sidebar />
          </div>
        )}
        <div className="flex-1">{children}</div>
      </div>
    </main>
  );
};

export default OrganizationLayout;
