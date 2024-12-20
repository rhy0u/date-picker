"use server"

import { signIn } from "@/auth"

export async function onSubmit(formData: FormData) {
  const provider = formData.get("provider")

  await signIn("nodemailer", formData)
}
