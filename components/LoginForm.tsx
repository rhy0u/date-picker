"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  SignInWithEmailType,
  signInWithEmailValidationSchema,
} from "@/lib/form/signInWithEmail/signInWithEmail"
import { onSubmit } from "@/lib/form/signInWithEmail/submit"
import { ErrorMessage } from "@hookform/error-message"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form"

export function EmailForm() {
  const {
    register,
    formState: { isValid, errors },
  } = useForm<SignInWithEmailType>({
    resolver: zodResolver(signInWithEmailValidationSchema),
  })
  const t = useTranslations()

  return (
    <form action={onSubmit}>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">{t("Signin.title")}</Label>
        <Input {...register("email")} placeholder="Email" id="email" />
        <ErrorMessage name="email" errors={errors} />
        <Button type="submit" disabled={!isValid} className="w-full">
          {t("Signin.button.email")}
        </Button>
      </div>
    </form>
  )
}
