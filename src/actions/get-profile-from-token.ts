"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import "server-only";
import jwtVerify from "../utils/jwt-verify";
export default async function getProfileFromToken() {
  const token = cookies().get("authToken")?.value;

  if (!token) {
    redirect("/");
  }

  const jwtVerification = jwtVerify(token);
  if (!jwtVerification?.valid) {
    return null;
  }

  const userProfile = {
    username: (jwtVerification?.token?.username as string) || "?",
    role: jwtVerification.token?.permissions === 1 ? "Admin" : "User",
  };

  return userProfile;
}
