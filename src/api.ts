"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import logout from "./actions/logout";

const BASEURL = process.env.API_BASEURL;

async function _post(route: string, body: { [key: string]: any }) {
  const response = await fetch(BASEURL + route, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (response?.status === 401) {
    return logout();
  }

  if (response?.status === 403) {
    return redirect("/login");
  }

  const status = response?.status;
  const data = await response.json();

  return { status, data };
}

interface LoginBody {
  username: string;
  password: string;
}

export async function apiLogin(body: LoginBody) {
  const response = await _post("/login", body);

  if (response?.data?.authToken) {
    cookies().set({
      name: "authToken",
      value: response.data.authToken,
      httpOnly: true,
      path: "/",
    });

    redirect("/");
  }

  return response;
}

interface RegisterBody {
  username: string;
  name: string;
  email: string;
  password: string;
}

export async function apiRegister(body: RegisterBody) {
  const response = await _post("/register", body);

  if (response?.data?.authToken) {
    cookies().set({
      name: "authToken",
      value: response.data.authToken,
      httpOnly: true,
      path: "/",
    });

    redirect("/");
  }

  return response;
}
