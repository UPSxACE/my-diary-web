"use client";
import NotePreview from "../../../../../components/notes/note-preview";

export default function NotePreviews({ notes }: { notes: any }) {
  if (!Array.isArray(notes)) {
    return null;
  }

  return notes.map((note, index) => (
    <NotePreview
      key={index}
      id={note.id}
      title={note.title}
      content={note.content_raw}
      createdAt={new Date(note.created_at)}
    />
  ));
}
