import { Avatar, UnstyledButton } from "@mantine/core";
import { IoPerson } from "react-icons/io5";

export default function SidebarHeader() {
  return (
    <div className="border-0 border-b border-solid border-mantine-gray-3 dark:border-mantine-dark-4 flex flex-col mb-4 pb-4">
      <UnstyledButton className={"rounded-sm flex gap-4"}>
        <Avatar
          radius="md"
          size="lg"
          classNames={{
            root: "h-auto w-auto min-w-0 min-h-0",
            placeholder: "bg-mantine-gray-5 text-white p-2", //"bg-transparent",
            image: "h-[2.375rem] w-[2.375rem]",
          }}
          src={null}
        >
          <IoPerson size={22} />
        </Avatar>
        <div className="flex flex-col h-full justify-between">
          <span className="text-lg font-semibold leading-[1]">Ace</span>
          <span className="text-sm text-mantine-dimmed leading-[1]">User</span>
        </div>
      </UnstyledButton>
    </div>
  );
}
