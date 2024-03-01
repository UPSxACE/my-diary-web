import { Paper, Skeleton } from "@mantine/core";

export default function NotePreviewSkeleton() {
  return (
    <Paper withBorder radius="xs" className="p-4 dark:bg-mantine-dark-6">
      <Skeleton height="1.25rem" />
      <Skeleton height="1.75rem" className="my-1" />
      <Skeleton height="7.5rem" />
    </Paper>
  );
}
