import { TextInput } from "@mantine/core";
import { RiSearchLine } from "react-icons/ri";
import AppPageContainer from "../../../components/page-containers/app-page-container";
import NotesContextProvider from "../_context/notes-context";
import FilterMenu from "./_components/filter-menu";
import Notes from "./_components/notes";

export default function AppPage() {
  return (
    <AppPageContainer secondary className="">
      <NotesContextProvider>
        <header className="sticky top-0 flex w-full gap-4 bg-mantine-gray-0 p-4 dark:bg-mantine-dark-7">
          <TextInput
            placeholder="Search"
            radius="xs"
            className="max-md:flex-1 md:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)] xl:w-[calc((100%-3rem)/4)]"
            leftSection={<RiSearchLine />}
          />
          <FilterMenu />
        </header>
        <Notes />
      </NotesContextProvider>
    </AppPageContainer>
  );
}
