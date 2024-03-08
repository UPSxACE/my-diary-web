import { Button, TextInput } from "@mantine/core";
import AppPageContainer from "../../../../components/page-containers/app-page-container";
import Editor from "./_components/editor";

export default function NewNotePage() {
  return (
    <AppPageContainer
      secondary
      className="flex flex-col gap-3 p-4  sm:p-8 xl:gap-4 xl:p-12"
    >
      <header className="flex flex-col flex-wrap items-center gap-3 xs:flex-row">
        <h1 className="m-0 w-full text-3xl xs:w-auto">Create new note</h1>
        <section
          id="action-buttons"
          className="flex w-full gap-4 xs:ml-auto xs:w-auto"
        >
          <Button className="flex-1 xs:flex-auto" variant="default">
            Discard
          </Button>
          <Button className="flex-1 xs:flex-auto">Save Note</Button>
        </section>
      </header>
      <article className="flex flex-1 flex-col">
        <form className="relative flex flex-1 flex-col gap-3 xl:gap-4">
          <TextInput
            radius="xs"
            size="lg"
            classNames={{ input: "text-xl" }}
            placeholder="Note Title"
          />
          <Editor />
        </form>
      </article>
    </AppPageContainer>
  );
}
