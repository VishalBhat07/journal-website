import * as React from "react";
import {
  HomeIcon,
  UsersIcon,
  BookOpenIcon,
  AwardIcon,
  ArchiveIcon,
  CreditCardIcon,
  FileTextIcon,
  SettingsIcon,
  TrendingUpIcon,
  BuildingIcon,
  FolderIcon,
  BanknoteIcon,
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import MobileSidebar from "./MobileSidebar";

const forAuthorsItems = [
  {
    title: "Guidelines and Responsibilities for Authors",
    href: "/author-guidelines",
    description:
      "Complete guidelines for manuscript preparation, submission requirements, and author responsibilities.",
    icon: <FileTextIcon className="h-4 w-4" />,
  },
  {
    title: "Publication Process for Publishing",
    href: "/publication-process",
    description:
      "Step-by-step process from submission to publication, including review stages and timelines.",
    icon: <SettingsIcon className="h-4 w-4" />,
  },
];

const benefitsItems = [
  {
    title: "Academic Benefits",
    href: "/academic-benefits",
    description:
      "Research opportunities, academic networking, conference presentations, and scholarly recognition.",
    icon: <TrendingUpIcon className="h-4 w-4" />,
  },
  {
    title: "Industry Benefits",
    href: "/industry-benefits",
    description:
      "Professional development, industry connections, technical insights, and career advancement opportunities.",
    icon: <BuildingIcon className="h-4 w-4" />,
  },
];

const journalArchiveItems = [
  {
    title: "Previous Journal Issues",
    href: "/previous-issues",
    description:
      "Access complete archive of past journal publications, research papers, and technical articles.",
    icon: <FolderIcon className="h-4 w-4" />,
  },
];

const sponsorsPaymentsItems = [
  {
    title: "Bank Details",
    href: "/bank-details",
    description:
      "Complete banking information for payments, subscriptions, and financial transactions.",
    icon: <BanknoteIcon className="h-4 w-4" />,
  },
  {
    title: "Advertisement Tariff Details",
    href: "/advertisement-tariff",
    description:
      "Comprehensive pricing structure for advertisements, sponsorships, and promotional content.",
    icon: <CreditCardIcon className="h-4 w-4" />,
  },
];

export default function Tabs() {
  return (
    <>
      {/* Mobile Sidebar */}
      <MobileSidebar />

      {/* Desktop Navigation */}
      <NavigationMenu viewport={false} className="hidden md:flex">
        <NavigationMenuList>
          {/* Home */}
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              className={`${navigationMenuTriggerStyle()} flex items-center gap-2`}
            >
              {/* <HomeIcon className="h-4 w-4" /> */}
              <span>Home</span>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Board */}
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/board-of-members"
              className={`${navigationMenuTriggerStyle()} flex items-center gap-2`}
            >
              {/* <UsersIcon className="h-4 w-4" /> */}
              <span>Board</span>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* For Authors */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="flex items-center gap-2">
              <span>For Authors</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                {forAuthorsItems.map((item) => (
                  <ListItemWithIcon
                    key={item.title}
                    title={item.title}
                    href={item.href}
                    icon={item.icon}
                  >
                    {item.description}
                  </ListItemWithIcon>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Benefits */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="flex items-center gap-2">
              <span>Benefits</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                {benefitsItems.map((item) => (
                  <ListItemWithIcon
                    key={item.title}
                    title={item.title}
                    href={item.href}
                    icon={item.icon}
                  >
                    {item.description}
                  </ListItemWithIcon>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Journal Archive */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="flex items-center gap-2">
              <span>Journal Archive</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                {journalArchiveItems.map((item) => (
                  <ListItemWithIcon
                    key={item.title}
                    title={item.title}
                    href={item.href}
                    icon={item.icon}
                  >
                    {item.description}
                  </ListItemWithIcon>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Sponsors & Payments */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="flex items-center gap-2">
              <span>Sponsors & Payments</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                {sponsorsPaymentsItems.map((item) => (
                  <ListItemWithIcon
                    key={item.title}
                    title={item.title}
                    href={item.href}
                    icon={item.icon}
                  >
                    {item.description}
                  </ListItemWithIcon>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

function ListItem({ title, children, href, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}

function ListItemWithIcon({ title, children, href, icon, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="flex items-center gap-2 text-sm font-medium leading-none">
            {icon}
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}
