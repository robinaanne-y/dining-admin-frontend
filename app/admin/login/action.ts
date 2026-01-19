"use server";

import api from "@/lib/api";
import { redirect } from "next/navigation";

export async function loginAction(_: any, formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    // REQUIRED: get CSRF cookie first
    await api.get("/sanctum/csrf-cookie");

    await api.post("/api/admin/login", {
      email,
      password,
    });

    redirect("/admin/dashboard");
  } catch {
    return { error: "Invalid email or password" };
  }
}
