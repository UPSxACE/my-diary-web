"use client";
import { RiLogoutBoxLine, RiMoonLine, RiSunLine } from "react-icons/ri";

import { useContext } from "react";
import logout from "../../../../actions/logout";
import { AppShellContext } from "../app-shell";
import SidebarButton from "./sidebar-button";

export default function SidebarFooter() {
  const { burguerToggle } = useContext(AppShellContext);
  async function onClick() {
    await logout();
    burguerToggle();
  }
  return (
    <div className="border-mantine-gray-3 dark:border-mantine-dark-4 mt-4 flex flex-col border-0 border-t border-solid pt-4">
      <SidebarButton Icon={<RiMoonLine />} className="dark:hidden">
        Dark Mode
      </SidebarButton>
      <SidebarButton Icon={<RiSunLine />} className="hidden dark:flex">
        Light Mode
      </SidebarButton>
      <SidebarButton Icon={<RiLogoutBoxLine />}>Log Out</SidebarButton>
    </div>
  );
}
