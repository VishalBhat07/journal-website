import * as React from "react";
import { useState, useEffect } from "react";
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
  MenuIcon,
  XIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "lucide-react";

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        !event.target.closest(".mobile-sidebar") &&
        !event.target.closest(".menu-trigger")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleExpanded = (key) => {
    setExpandedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const closeSidebar = () => {
    setIsOpen(false);
    setExpandedItems({}); // Reset expanded items when closing
  };

  const forAuthorsItems = [
    {
      title: "Guidelines and Responsibilities for Authors",
      href: "/author-guidelines",
      icon: <FileTextIcon className="h-4 w-4" />,
    },
    {
      title: "Publication Process for Publishing",
      href: "/publication-process",
      icon: <SettingsIcon className="h-4 w-4" />,
    },
  ];

  const benefitsItems = [
    {
      title: "Academic Benefits",
      href: "/academic-benefits",
      icon: <TrendingUpIcon className="h-4 w-4" />,
    },
    {
      title: "Industry Benefits",
      href: "/industry-benefits",
      icon: <BuildingIcon className="h-4 w-4" />,
    },
  ];

  const journalArchiveItems = [
    {
      title: "Previous Journal Issues",
      href: "/previous-issues",
      icon: <FolderIcon className="h-4 w-4" />,
    },
  ];

  const sponsorsPaymentsItems = [
    {
      title: "Bank Details",
      href: "/bank-details",
      icon: <BanknoteIcon className="h-4 w-4" />,
    },
    {
      title: "Advertisement Tariff Details",
      href: "/advertisement-tariff",
      icon: <CreditCardIcon className="h-4 w-4" />,
    },
  ];

  return (
    <>
      {/* Menu Trigger Button */}
      <button
        className="menu-trigger md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle mobile menu"
      >
        {isOpen ? (
          <XIcon className="h-6 w-6 text-gray-800" />
        ) : (
          <MenuIcon className="h-6 w-6 text-gray-800" />
        )}
      </button>

      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeSidebar}
      />

      {/* Mobile Sidebar */}
      <div
        className={`mobile-sidebar fixed top-0 left-0 h-full w-80 bg-white/10 backdrop-blur-xl border-r border-white/20 z-50 transform transition-all duration-500 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-white/20">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">ASM India</h2>
            <button
              onClick={closeSidebar}
              className="p-2 rounded-lg hover:bg-white/20 transition-colors duration-200"
              aria-label="Close menu"
            >
              <XIcon className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="space-y-2 px-4">
            {/* Home */}
            <a
              href="/"
              onClick={closeSidebar}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/20 transition-all duration-200 text-gray-800 hover:text-gray-900"
            >
              <HomeIcon className="h-5 w-5" />
              <span>Home</span>
            </a>

            {/* Board */}
            <a
              href="/board-of-members"
              onClick={closeSidebar}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/20 transition-all duration-200 text-gray-800 hover:text-gray-900"
            >
              <UsersIcon className="h-5 w-5" />
              <span>Board</span>
            </a>

            {/* For Authors - Removed icon from main header */}
            <div className="space-y-1">
              <button
                onClick={() => toggleExpanded("forAuthors")}
                className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-white/20 transition-all duration-200 text-gray-800 hover:text-gray-900"
              >
                <span>For Authors</span>
                {expandedItems.forAuthors ? (
                  <ChevronDownIcon className="h-4 w-4 transition-transform duration-200" />
                ) : (
                  <ChevronRightIcon className="h-4 w-4 transition-transform duration-200" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedItems.forAuthors
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-8 space-y-1">
                  {forAuthorsItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      onClick={closeSidebar}
                      className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/15 transition-all duration-200 text-gray-700 hover:text-gray-900 text-sm"
                    >
                      {item.icon}
                      <span>{item.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Benefits - Removed icon from main header */}
            <div className="space-y-1">
              <button
                onClick={() => toggleExpanded("benefits")}
                className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-white/20 transition-all duration-200 text-gray-800 hover:text-gray-900"
              >
                <span>Benefits</span>
                {expandedItems.benefits ? (
                  <ChevronDownIcon className="h-4 w-4 transition-transform duration-200" />
                ) : (
                  <ChevronRightIcon className="h-4 w-4 transition-transform duration-200" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedItems.benefits
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-8 space-y-1">
                  {benefitsItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      onClick={closeSidebar}
                      className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/15 transition-all duration-200 text-gray-700 hover:text-gray-900 text-sm"
                    >
                      {item.icon}
                      <span>{item.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Journal Archive - Removed icon from main header */}
            <div className="space-y-1">
              <button
                onClick={() => toggleExpanded("journalArchive")}
                className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-white/20 transition-all duration-200 text-gray-800 hover:text-gray-900"
              >
                <span>Journal Archive</span>
                {expandedItems.journalArchive ? (
                  <ChevronDownIcon className="h-4 w-4 transition-transform duration-200" />
                ) : (
                  <ChevronRightIcon className="h-4 w-4 transition-transform duration-200" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedItems.journalArchive
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-8 space-y-1">
                  {journalArchiveItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      onClick={closeSidebar}
                      className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/15 transition-all duration-200 text-gray-700 hover:text-gray-900 text-sm"
                    >
                      {item.icon}
                      <span>{item.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Sponsors & Payments - Removed icon from main header */}
            <div className="space-y-1">
              <button
                onClick={() => toggleExpanded("sponsorsPayments")}
                className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-white/20 transition-all duration-200 text-gray-800 hover:text-gray-900"
              >
                <span>Sponsors & Payments</span>
                {expandedItems.sponsorsPayments ? (
                  <ChevronDownIcon className="h-4 w-4 transition-transform duration-200" />
                ) : (
                  <ChevronRightIcon className="h-4 w-4 transition-transform duration-200" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedItems.sponsorsPayments
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-8 space-y-1">
                  {sponsorsPaymentsItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      onClick={closeSidebar}
                      className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/15 transition-all duration-200 text-gray-700 hover:text-gray-900 text-sm"
                    >
                      {item.icon}
                      <span>{item.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
