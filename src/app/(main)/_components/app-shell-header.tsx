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
            <>
              <LogoutButton />
              <Button component={Link} href="/app">
                My Notes
              </Button>

              {/* <Menu position="top-end">
                <MenuTarget>
                  <Button
                    variant="filled"
                    className="p-1 block h-auto text-2xl text-white  !transform-none border-none "
                  >
                    <Avatar
                      radius="xl"
                      size="lg"
                      classNames={{
                        root: 'h-auto w-auto min-w-0 min-h-0',
                        placeholder: 'bg-transparent text-white',
                        image: 'h-[2.375rem] w-[2.375rem]',
                      }}
                      src={null}
                    >
                      <RxAvatar size={28} />
                    </Avatar>
                    <IoChevronDown />
                  </Button>
                </MenuTarget>
                <MenuDropdown>
                  <MenuItem className="text-lg" component={Link} href="/app">
                    App
                  </MenuItem>
                  <LogoutButton menuItem />
                </MenuDropdown>
              </Menu> */}
            </>
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
