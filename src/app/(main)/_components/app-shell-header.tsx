import {
  Anchor,
  AppShellHeader as AppShellHeaderMantine,
  Button,
} from "@mantine/core";
import Link from "next/link";
import { PiNotebookFill } from "react-icons/pi";
import BurgerMenu from "./_components/burger-menu";
import ExpandedMenu from "./_components/expanded-menu";
import LogoutButton from "./_components/logout-button";

export default async function AppShellHeader({
  loggedIn,
}: {
  loggedIn: boolean;
}) {
  // TODO
  // Decide menu items here
  // Then pass down to components
  return (
    <AppShellHeaderMantine className="flex justify-center px-4 border-transparent">
      <div className="flex flex-1 max-w-screen-lg items-center">
        <div className="flex flex-1 relative h-full overflow-hidden items-center">
          <Anchor
            component={Link}
            href="/"
            className="flex items-center absolute flex-nowrap text-2xl !text-mantine-text !no-underline font-medium"
          >
            <i className="flex text-4xl text-mantine-mainColor-4">
              <PiNotebookFill />
            </i>
            MyDiary
          </Anchor>
        </div>

        <BurgerMenu />
        <ExpandedMenu />

        <div className="flex-1 hidden xs:flex gap-2 justify-end items-center flex-wrap">
          {loggedIn ? (
            <LogoutButton />
          ) : (
            <>
              <Button component={Link} href="/login" variant="default">
                Log In
              </Button>
              <Button component={Link} href="/register">
                Sign Up
              </Button>
            </>
          )}
        </div>
      </div>
    </AppShellHeaderMantine>
  );
}
