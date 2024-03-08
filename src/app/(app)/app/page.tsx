import { TextInput } from "@mantine/core";
import { RiSearchLine } from "react-icons/ri";
import AppPageContainer from "../../../components/page-containers/app-page-container";
import NotesContextProvider from "../_context/notes-context";
import FilterMenu from "./_components/filter-menu";
import Notes from "./_components/notes";

export default function AppPage() {
  return (
    <AppPageContainer secondary className="p-4">
      <NotesContextProvider>
        <header className="relative mb-4 flex w-full gap-4">
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
