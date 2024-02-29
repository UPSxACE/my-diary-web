"use client";

import { Button, Menu, MenuDropdown, MenuTarget, Select } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import { IoTriangle } from "react-icons/io5";
import { NotesContext } from "../../_context/notes-context";

export default function FilterMenu() {
  const { menuOpen, setMenuOpen, orderBy, setOrderBy } =
    useContext(NotesContext);
  const [localOrderBy, setLocalOrderBy] = useState<string | null>(orderBy);

  function handleMenuTargetClick() {
    setMenuOpen(!menuOpen);
  }

  function handleApplyClick() {
    setOrderBy(localOrderBy);
    setMenuOpen(false);
  }

  function handleSelectChange(value: string | null) {
    setLocalOrderBy(value);
  }

  useEffect(() => {
    setTimeout(() => {
      if (!menuOpen) setLocalOrderBy(orderBy);
    }, 100);
  }, [menuOpen, orderBy]);

  return (
    <Menu position="bottom-end" offset={2} withArrow opened={menuOpen}>
      <MenuTarget>
        <Button
          radius="xs"
          variant="default"
          className="text-mantine-gray-8 dark:text-mantine-text ml-auto !transform-none"
          classNames={{
            root: "px-3",
            section: "ml-2",
          }}
          rightSection={
            <IoTriangle transform="rotate(180) scale(1, 0.5)" size={12} />
          }
          onClick={handleMenuTargetClick}
        >
          Filters
        </Button>
      </MenuTarget>
      <MenuDropdown className="p-3 px-4">
        <Select
          label="Order by"
          placeholder="Pick value"
          value={localOrderBy}
          onChange={handleSelectChange}
          data={["Latest First", "Oldest First", "Title A-Z", "Title Z-A"]}
          classNames={{ label: "mb-[0.35rem]" }}
        />
        <Button
          variant="filled"
          size="compact-sm"
          className="mt-2"
          onClick={handleApplyClick}
        >
          Apply
        </Button>
      </MenuDropdown>
    </Menu>
  );
}
