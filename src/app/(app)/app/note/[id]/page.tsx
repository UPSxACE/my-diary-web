import {
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTarget,
  UnstyledButton,
} from "@mantine/core";
import { HiMiniArrowLeft } from "react-icons/hi2";

import Link from "next/link";
import { FaTrash } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";
import ssrNote from "../../../../../actions/ssr-note";
import AppPageContainer from "../../../../../components/page-containers/app-page-container";
import Article from "./_components/article";

export default async function NoteIdPage({
  params,
}: {
  params: { id: number };
}) {
  const noteData = await ssrNote(params.id);

  return (
    <>
      <header className="flex select-none items-center gap-3 bg-white p-2 px-4 text-xl font-medium text-mantine-text">
        <div className="flex gap-3">
          <UnstyledButton
            component={Link}
            href="/app"
            className="mt-[0.175rem] flex h-full flex-col justify-center  text-2xl"
          >
            <HiMiniArrowLeft />
          </UnstyledButton>
        </div>
        {/* <span>{noteData.title}</span> */}
        {/* <Button variant="default" className="ml-auto border-0">
          Share
        </Button> */}{" "}
        <Menu position="bottom-end" offset={2}>
          <MenuTarget>
            <UnstyledButton className=" ml-auto flex h-full flex-col justify-center text-xl">
              <SlOptions />
            </UnstyledButton>
          </MenuTarget>
          <MenuDropdown className="p-1">
            <MenuItem leftSection={<FaTrash />} className="py-1">
              Delete
            </MenuItem>
          </MenuDropdown>
        </Menu>
      </header>
      <AppPageContainer className="max-w-[850px] p-4 xs:p-10 xs:px-16 sm:py-16 md:px-16">
        <Article data={noteData} />
      </AppPageContainer>
    </>
  );
}
