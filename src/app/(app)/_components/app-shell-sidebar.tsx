import { AppShellNavbar } from "@mantine/core";
import { RiFileList2Line } from "react-icons/ri";
import DarkOverlay from "./_components/dark-overlay";
import SidebarBody from "./_components/sidebar-body";
import SidebarButton from "./_components/sidebar-button";
import SidebarFooter from "./_components/sidebar-footer";
import SidebarHeader from "./_components/sidebar-header";

export default function AppShellSidebar() {
  return (
    <AppShellNavbar
      w={300}
      className="border-mantine-gray-3 dark:border-mantine-dark-4 border-0 border-e"
    >
      <DarkOverlay />
      <div className="absolute flex h-full w-[300px] flex-col px-6 py-4">
        <SidebarHeader />
        <SidebarBody>
          <SidebarButton Icon={<RiFileList2Line />} navlink={"app"}>
            All Notes
          </SidebarButton>
        </SidebarBody>
        <SidebarFooter />
      </div>
    </AppShellNavbar>
  );
}
