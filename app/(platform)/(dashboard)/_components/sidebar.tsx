"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import { useLocalStorage } from "usehooks-ts";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Accordion } from "@/components/ui/accordion";
import { NavItem, Organization } from "./nav-item";
import ConnectInstagramButton from "@/components/createAd/ConnectInstagramButton";

interface SidebarProps {
  storageKey?: string;
}

export const Sidebar = ({ storageKey = "t-sidebar-state" }: SidebarProps) => {
  const [expanded, setExpanded] = useLocalStorage<Record<string, boolean>>(
    storageKey,
    {}
  );

  const { organization: activeOrganization, isLoaded: isLoadedOrg } =
    useOrganization();
  const { userMemberships, isLoaded: isLoadedOrgList } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  const defaultAccordionValue: string[] = Object.keys(expanded).reduce(
    (acc: string[], key: string) => {
      if (expanded[key]) {
        acc.push(key);
      }
      return acc;
    },
    []
  );

  const onExpand = (id: string) => {
    setExpanded((curr) => ({
      ...curr,
      [id]: !expanded[id],
    }));
  };

  // Local state for FontSettings
  // const [headlineFontSize, setHeadlineFontSize] = useState<number>(20);
  // const [headlineBgColor, setHeadlineBgColor] = useState<string>("#000000");
  // const [headlineFontColor, setHeadlineFontColor] = useState<string>("#FFFFFF");
  // const [isBold, setIsBold] = useState<boolean>(false);
  // const [isItalic, setIsItalic] = useState<boolean>(false);
  // const [headlineFont, setHeadlineFont] = useState<string>("Arial");

  if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) {
    return (
      <div className="bg-gray-100 p-4 fixed top-14 left-0 w-72 h-screen">
        <div className="flex items-center justify-between mb-2">
          <Skeleton className="h-10 w-[50%]" />
          <Skeleton className="h-10 w-10" />
        </div>
        <div className="space-y-2">
          <NavItem.Skeleton />
          <NavItem.Skeleton />
          <NavItem.Skeleton />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 p-4 fixed top-14 left-0 w-72 h-screen shadow-lg overflow-y-auto">
      <div className="font-medium text-sm flex items-center mb-4">
        <span className="pl-4 text-gray-800">Workspaces</span>
        <Button
          asChild
          type="button"
          size="icon"
          variant="ghost"
          className="ml-auto"
        >
          <Link href="/select-org">
            <Plus className="h-4 w-4 text-blue-500" />
          </Link>
        </Button>
      </div>

      <Accordion
        type="multiple"
        defaultValue={defaultAccordionValue}
        className="space-y-2"
      >
        {userMemberships.data.map(({ organization }) => (
          <NavItem
            key={organization.id}
            isActive={activeOrganization?.id === organization.id}
            isExpanded={expanded[organization.id]}
            organization={organization as Organization}
            onExpand={onExpand}
          />
        ))}
      </Accordion>
      <br />
      <br />
      <ConnectInstagramButton />

      {/* Directly render FontSettings (no extra outer container) */}
      {/* <div className="mt-8">
        <FontSettings
          headlineFontSize={headlineFontSize}
          setHeadlineFontSize={setHeadlineFontSize}
          headlineBgColor={headlineBgColor}
          setHeadlineBgColor={setHeadlineBgColor}
          headlineFontColor={headlineFontColor}
          setHeadlineFontColor={setHeadlineFontColor}
          isBold={isBold}
          setIsBold={setIsBold}
          isItalic={isItalic}
          setIsItalic={setIsItalic}
          headlineFont={headlineFont}
          setHeadlineFont={setHeadlineFont}
        />
      </div> */}
    </div>
  );
};
