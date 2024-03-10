"use client";
import axios, { AxiosInstance } from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { LoginBody, NewNoteBody, RegisterBody } from "./types";

const config = {
  baseURL: process.env.NEXT_PUBLIC_API_BASEURL,
  timeout: 5000,
  withCredentials: true,
};

export default class Api {
  axios: AxiosInstance;
  router: AppRouterInstance;

  constructor(router: AppRouterInstance) {
    const axiosInstance = axios.create(config);

    axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error?.response?.status === 401) {
          return this.router.push("/");
        }
        if (error?.response?.status === 403) {
          return this.router.push("/login");
        }
        return Promise.reject(error);
      },
    );

    this.axios = axiosInstance;
    this.router = router;
  }

  _get(route: string) {
    return this.axios.get(route);
  }

  _post(route: string, body: { [key: string]: any }) {
    return this.axios.post(route, body);
  }

  async getProfile() {
    return this._get("/profile");
  }

  async postLogin(loginBody: LoginBody) {
    return this._post("/login", loginBody);
  }

  async postRegister(registerBody: RegisterBody) {
    return this._post("/register", registerBody);
  }

  async postNotes(noteBody: NewNoteBody) {
    return this._post("/notes", noteBody);
  }
}
