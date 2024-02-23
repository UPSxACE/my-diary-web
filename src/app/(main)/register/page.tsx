"use client";

import {
  Anchor,
  Button,
  Checkbox,
  LoadingOverlay,
  Paper,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import Link from "next/link";
import { useState } from "react";
import { apiRegister } from "../../../api";
import ErrorAlert from "../../../components/alerts/error-alert";
import PageContainer from "../../../components/page-container";

export default function Register() {
  const [overlay, setOverlay] = useState(false);
  const [error, setError] = useState("");

  async function register() {
    setOverlay(true);
    await apiRegister(form.values)
      .then((response) => {
        if (response?.status === 400) {
          setError(response?.data?.message || "Try again later.");
        } else {
          setError("Try again later.");
        }
      })
      .catch(() => {
        setError("Try again later.");
      })
      .finally(() => {
        setOverlay(false);
      });
  }

  const form = useForm({
    initialValues: {
      username: "",
      email: "",
      name: "",
      password: "",
      repeatPassword: "",
      terms: true,
    },

    validate: {
      username: (val) =>
        /^[a-z0-9_-]+$/.test(val) ? null : "Invalid username",
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
      repeatPassword: (val, values) =>
        val === values.password ? null : "The passwords don't match",
    },
  });

  return (
    <PageContainer secondary className="p-4 justify-center items-center">
      <h1 className="m-0 text-4xl font-bold text-center">
        Welcome to MyDiary!
      </h1>
      <Anchor
        component={Link}
        href="/login"
        className="text-mantine-dimmed text-sm mt-2 mb-8 text-center"
      >
        Already have an account?{" "}
        <em className="not-italic text-mantine-mainColor-4">Login</em>
      </Anchor>
      <Paper
        component="form"
        withBorder
        className="w-full max-w-[420px] p-7 rounded-md gap-5 flex flex-col relative"
        onSubmit={form.onSubmit(register)}
      >
        <LoadingOverlay
          visible={overlay}
          className="z-[99] rounded-md"
          zIndex={99}
          overlayProps={{ blur: 2 }}
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
        <TextInput
          required
          label="Name"
          placeholder="Your name"
          value={form.values.name}
          onChange={(event) =>
            form.setFieldValue("name", event.currentTarget.value)
          }
          radius="md"
        />
        <TextInput
          required
          label="Email"
          placeholder="example@example.com"
          value={form.values.email}
          onChange={(event) =>
            form.setFieldValue("email", event.currentTarget.value)
          }
          error={form.errors.email}
          radius="md"
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

        <PasswordInput
          required
          label="Repeat Password"
          placeholder="Your password"
          value={form.values.repeatPassword}
          onChange={(event) =>
            form.setFieldValue("repeatPassword", event.currentTarget.value)
          }
          error={form.errors.repeatPassword}
          radius="md"
        />

        <div className="flex items-center flex-wrap gap-4 max-xs:flex-col">
          <Checkbox
            label="I accept terms and conditions"
            checked={form.values.terms}
            onChange={(event) =>
              form.setFieldValue("terms", event.currentTarget.checked)
            }
            required
          />
          <Button className="xs:ml-auto" type="submit" radius="xl">
            Register
          </Button>
        </div>
      </Paper>
    </PageContainer>
  );
}
