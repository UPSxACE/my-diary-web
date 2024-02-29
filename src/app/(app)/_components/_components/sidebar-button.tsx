"use client";
import { UnstyledButton } from "@mantine/core";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentPropsWithoutRef, ReactElement } from "react";
import { IconType } from "react-icons";

interface SidebarButtonProps extends ComponentPropsWithoutRef<"a"> {
  className?: string;
  Icon: ReactElement<IconType>;
  navlink?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export default function SidebarButton({
  children,
  className,
  Icon,
  navlink,
  onClick,
}: SidebarButtonProps) {
  const pathname = usePathname();
  const route = pathname.slice(1).split("/")[0];
  const active = typeof navlink === "string" && navlink === route;

  const extraProps =
    typeof navlink === "string"
      ? {
          component: Link,
          href: navlink,
        }
      : {
          href: "",
          onClick,
        };

  return (
    <UnstyledButton
      {...extraProps}
      className={clsx(
        "hover:bg-mantine-gray-1 dark:hover:bg-mantine-dark-5 text-mantine-gray-6 group flex items-center gap-3 rounded-[0.2rem] px-3 py-3 text-2xl hover:text-black dark:hover:text-white",
        className,
        active && "!bg-mantine-primary-light !text-mantine-primary-4",
      )}
    >
      {Icon}
      <span
        className={clsx(
          "text-mantine-gray-7 dark:text-mantine-gray-6 text-sm font-semibold group-hover:text-black dark:group-hover:text-white",
          active && "!text-mantine-primary-4",
        )}
      >
        {children}
      </span>
    </UnstyledButton>
  );
}
