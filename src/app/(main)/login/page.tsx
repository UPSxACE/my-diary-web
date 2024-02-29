"use client";

import {
  Anchor,
  Button,
  LoadingOverlay,
  Paper,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import Link from "next/link";
import { useState } from "react";
import { apiLogin } from "../../../api";
import ErrorAlert from "../../../components/alerts/error-alert";
import PageContainer from "../../../components/page-containers/page-container";

export default function Login() {
  const [overlay, setOverlay] = useState(false);
  const [error, setError] = useState("");

  const form = useForm({
    initialValues: {
      username: "",
      password: "",
    },

    validate: {},
  });

  async function login() {
    if (overlay) return;
    setOverlay(true);
    await apiLogin(form.values)
      .then((response) => {
        if (response?.ok === false) {
          switch (response?.status) {
            case 404:
              setError("The user does not exist.");
              break;
            case 400:
              setError("Invalid username or password.");
              break;
            default:
              setError("Try again later.");
          }
          setOverlay(false);
        }
      })
      .catch((err) => {
        setError("Try again later.");
        setOverlay(false);
      });
  }

  return (
    <PageContainer secondary className="items-center justify-center p-4">
      <h1 className="m-0 text-center text-4xl font-bold">Welcome Back!</h1>
      <Anchor
        component={Link}
        href="/register"
        className="text-mantine-dimmed mb-8 mt-2 text-center text-sm"
      >
        Do not have an account yet?{" "}
        <em className="text-mantine-primary-4 not-italic">Create account</em>
      </Anchor>
      <Paper
        component="form"
        withBorder
        className="relative flex w-full max-w-[420px] flex-col gap-5 rounded-md p-7"
        onSubmit={form.onSubmit(login)}
      >
        <LoadingOverlay
          visible={overlay}
          className="z-[99] rounded-md"
          zIndex={99}
          overlayProps={{ blur: 2 }}
          loaderProps={{ type: "bars" }}
        />
        <ErrorAlert title={error} visible={error != ""} />
        <TextInput
          required
          label="Username"
          placeholder="Your username"
          value={form.values.username}
          onChange={(event) =>
            form.setFieldValue("username", event.currentTarget.value)
          }
          radius="md"
          error={form.errors.username}
        />

        <PasswordInput
          required
          label="Password"
          placeholder="Your password"
          value={form.values.password}
          onChange={(event) =>
            form.setFieldValue("password", event.currentTarget.value)
          }
          error={form.errors.password}
          radius="md"
        />

        <div className="flex flex-wrap items-center gap-4">
          <Anchor
            component={Link}
            // TODO: Forgot password implementation
            href="/forgot-password"
            className="text-mantine-dimmed text-xs"
          >
            Forgot your password?
          </Anchor>
          <Button className="ml-auto" type="submit" radius="xl">
            Login
          </Button>
        </div>
      </Paper>
    </PageContainer>
  );
}
