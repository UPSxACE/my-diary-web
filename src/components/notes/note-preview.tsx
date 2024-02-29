import { Anchor, Paper, Skeleton } from "@mantine/core";
import Link from "next/link";
import { SlOptions } from "react-icons/sl";

interface NotePreviewProps {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

export default function NotePreview(props: NotePreviewProps) {
  const { id, title, content, createdAt } = props;
  return (
    <Paper
      withBorder
      radius="xs"
      className="dark:bg-mantine-dark-6 transition-all duration-300 hover:shadow-[0_0_11px_rgba(33,33,33,.2)]"
    >
      <div className="flex p-4 pb-0 text-gray-400">
        <span className="text-sm">{createdAt}</span>
        <SlOptions className="ml-auto" />
      </div>
      <Anchor
        className="block p-4 pt-0"
        component={Link}
        underline={"never"}
        href={`/app/note/${id}`}
      >
        <h1 className="text-mantine-text m-0 my-1 text-xl dark:text-white">
          {title}
        </h1>
        <p className="m-0 line-clamp-[5] h-[7.5rem] text-base font-medium text-gray-600 dark:text-gray-400">
          {content}
        </p>
      </Anchor>
    </Paper>
  );
}

export function NotePreviewSkeleton() {
  return (
    <Paper withBorder radius="xs" className="dark:bg-mantine-dark-6 p-4">
      <Skeleton height="1.25rem" />
      <Skeleton height="1.75rem" className="my-1" />
      <Skeleton height="7.5rem" />
    </Paper>
  );
}
