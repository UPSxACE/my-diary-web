import {
  Anchor,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTarget,
  Paper,
  UnstyledButton,
} from "@mantine/core";
import Link from "next/link";
import { FaTrash } from "react-icons/fa";
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
      className="transition-all duration-300 hover:shadow-[0_0_11px_rgba(33,33,33,.2)] dark:bg-mantine-dark-6"
    >
      <div className="flex items-center p-4 pb-0 text-gray-400">
        <span className="text-sm">{createdAt}</span>
        <Menu position="bottom-end" offset={2}>
          <MenuTarget>
            <UnstyledButton className="ml-auto flex h-full flex-col justify-center p-1 text-lg">
              <SlOptions />
            </UnstyledButton>
          </MenuTarget>
          <MenuDropdown className="p-1">
            <MenuItem leftSection={<FaTrash />} className="py-1">
              Delete
            </MenuItem>
          </MenuDropdown>
        </Menu>
      </div>
      <Anchor
        className="block p-4 pt-0"
        component={Link}
        underline={"never"}
        href={`/app/note/${id}`}
      >
        <h1 className="m-0 mb-1 text-xl text-mantine-text dark:text-white">
          {title}
        </h1>
        <p className="m-0 line-clamp-[5] h-[7.5rem] text-base font-medium text-gray-600 dark:text-gray-400">
          {content}
        </p>
      </Anchor>
    </Paper>
  );
}
