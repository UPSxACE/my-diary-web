"use client";
import { useContext, useEffect, useState } from "react";
import NotePreview, {
  NotePreviewSkeleton,
} from "../../../../components/notes/note-preview";
import ElementRepeater from "../../../../utils/element-repeater";
import { NotesContext } from "../../_context/notes-context";

// FIXME
const notes: any[] = [];

export default function Notes() {
  const [done, setDone] = useState(false);
  const { menuOpen, setMenuOpen, orderBy, setOrderBy } =
    useContext(NotesContext);

  useEffect(() => {
    setTimeout(() => setDone(true), 500);
  }, []);

  // TODO: decide url, query, and order here

  function getNotePreviews() {
    return notes.map((note) => (
      <NotePreview
        key={note.id}
        id={note.id}
        title={note.title}
        content={note.content}
        createdAt={note.createdAt}
      />
    ));
  }

  if (done && notes.length === 0) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center px-6">
        <img
          className="filter-[drop-shadow] white-img-shadow max-h-[40vh] w-full"
          //className="max-h-[50vh] w-[40vw] min-w-[180px]"
          src="/notes-girl.svg"
          alt="Girl writing notes"
        />
        <h1 className="xs:text-3xl text-mantine-text dark:text-mantine-gray-6 mt-8 text-center text-2xl font-medium">
          Go ahead, and add your first note!
        </h1>
      </div>
    );
  }

  return (
    <div className="grid flex-1 auto-rows-min grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {done ? (
        getNotePreviews()
      ) : (
        <ElementRepeater nRepeat={16} element={<NotePreviewSkeleton />} />
      )}
    </div>
  );
}