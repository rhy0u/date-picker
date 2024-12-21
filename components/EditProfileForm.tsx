"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { redirect } from "@/i18n/routing"
import {
  EditProfileType,
  editProfileValidationSchema,
} from "@/lib/form/editProfileForm/editProfile"
import { onSubmit } from "@/lib/form/editProfileForm/submit"
import { ErrorMessage } from "@hookform/error-message"
import { zodResolver } from "@hookform/resolvers/zod"
import { Pencil } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { ChangeEvent, useState } from "react"
import { useForm } from "react-hook-form"

export function EditProfileForm({
  userId,
  profilePicture,
}: {
  userId: string
  profilePicture: string
}) {
  const {
    register,
    watch,
    formState: { isValid, errors },
  } = useForm<EditProfileType>({
    resolver: zodResolver(editProfileValidationSchema),
  })
  const [image, setImage] = useState<string | null>(null)
  const t = useTranslations()
  return (
    <form
      className="flex flex-col gap-2 w-full md:w-[500px] justify-center items-center"
      action={(FormData) => {
        onSubmit(FormData, userId)
        redirect({ href: "profile", locale: "fr" })
      }}
    >
      <div className="relative rounded-full w-[150px] h-[150px]">
        {
          <Image
            className="rounded-full"
            src={image || profilePicture}
            alt="profilePicture"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        }
      </div>

      <Label htmlFor="image">
        <Pencil height={24} width={24} className="cursor-pointer" />
      </Label>
      <Input
        {...register("image", {
          onChange: (event: ChangeEvent<HTMLInputElement>) => {
            const file = event.target.files?.[0] || null
            if (file) {
              const url = URL.createObjectURL(file)
              setImage(url)
            }
          },
        })}
        className="hidden"
        placeholder="Jhon"
        type="file"
        id="image"
      />
      <ErrorMessage name="image" errors={errors} />
      <div className="w-full">
        <Label htmlFor="name">{t("Profile.form.name.label")}</Label>
        <Input {...register("name")} placeholder="Jhon" id="name" />
        <ErrorMessage name="name" errors={errors} />
      </div>

      <Button type="submit" className="w-full">
        {t("Profile.submit")}
      </Button>
    </form>
  )
}
