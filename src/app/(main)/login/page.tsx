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
import PageContainer from "../../../components/page-container";

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
      })
      .catch((err) => {
        setError("Try again later.");
      })
      .finally(() => {
        setOverlay(false);
      });
  }

  return (
    <PageContainer secondary className="p-4 justify-center items-center">
      <h1 className="m-0 text-4xl font-bold text-center">Welcome Back!</h1>
      <Anchor
        component={Link}
        href="/register"
        className="text-mantine-dimmed text-sm mt-2 mb-8 text-center"
      >
        Do not have an account yet?{" "}
        <em className="not-italic text-mantine-mainColor-4">Create account</em>
      </Anchor>
      <Paper
        component="form"
        withBorder
        className="w-full max-w-[420px] p-7 rounded-md gap-5 flex flex-col relative"
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

        <div className="flex items-center flex-wrap gap-4">
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
