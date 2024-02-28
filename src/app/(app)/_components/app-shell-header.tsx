import { AppShellHeader as AppShellHeaderMantine } from "@mantine/core";
import Logo from "../../../components/logo";
import BurgerMenu from "./_components/burger-menu";

export default async function AppShellHeader() {
  return (
    <AppShellHeaderMantine className="bg-mantine-primary-filled xs:hidden border-b-mantine-primary-7 flex justify-center border-transparent px-4">
      <div className="flex max-w-screen-lg flex-1 items-center">
        <Logo white />
        <BurgerMenu />
      </div>
    </AppShellHeaderMantine>
  );
}
