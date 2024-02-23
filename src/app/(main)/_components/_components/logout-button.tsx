"use client";

import { Button } from "@mantine/core";
import logout from "../../../../actions/logout";

export default function LogoutButton() {
  async function onClick() {
    await logout();
  }

  return (
    <Button onClick={onClick} variant="default">
      Log Out
    </Button>
  );
}
