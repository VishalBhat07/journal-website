import React from "react";
import * as Icons from "lucide-react";
import { Link } from "react-router-dom";

import { navLinks } from "@/data/navLinks";
import { sidebarFolders } from "@/data/sidebarFolders";

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-center pt-8">
        <img src="/logo.png" alt="logo" className="h-12 w-auto" />

      </SidebarHeader>
      <SidebarContent className="space-y-2 py-8">
        {navLinks.map((item) => {
          const Icon = Icons[item.icon];
          return (
            <SidebarGroup key={item.title}>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuButton asChild>
                    <Link to={item.href}>
                      <div className="flex items-center gap-2 text-foreground overflow-hidden text-ellipsis whitespace-nowrap">
                        <Icon className="h-4 w-4" />
                        <span className="text-sm">{item.title}</span>
                      </div>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          );
        })}

        {sidebarFolders.map((section) => {
          const SectionIcon = Icons[section.icon];
          return (
            <SidebarGroup key={section.title}>
              <Collapsible defaultOpen={false} className="group/collapsible">
                <SidebarGroupLabel asChild>
                  <CollapsibleTrigger className="flex w-full items-center justify-between hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-md p-2 text-sm font-medium transition-colors">
                    <div className="flex items-center gap-2 text-foreground overflow-hidden text-ellipsis whitespace-nowrap">
                      <SectionIcon className="h-4 w-4" />
                      <span className="text-sm">{section.title}</span>
                    </div>
                    <Icons.ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>
                <CollapsibleContent>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuSub className="space-y-2 p-2">
                        {section.items.map((item) => {
                          const ItemIcon = Icons[item.icon];
                          return (
                            <SidebarMenuSubItem key={item.title}>
                              <SidebarMenuSubButton asChild>
                                <Link to={item.href} title={item.description}>
                                  <div className="flex items-center gap-2 text-muted-foreground overflow-hidden text-ellipsis whitespace-nowrap">
                                    <ItemIcon className="h-4 w-4" />
                                    <span className="text-sm">
                                      {item.title}
                                    </span>
                                  </div>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          );
                        })}
                      </SidebarMenuSub>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </CollapsibleContent>
              </Collapsible>
            </SidebarGroup>
          );
        })}
      </SidebarContent>
    </Sidebar>
  );
}
