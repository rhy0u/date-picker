"use server"

import { Bucket, s3 } from "@/lib/s3"
import { Upload } from "@aws-sdk/lib-storage"

import { prisma } from "@/prisma"
import { User } from "@prisma/client"

export async function onSubmit(formData: FormData, userId: string) {
  const provider = formData.get("provider")

  const name = formData.get("name")
  const image = formData.get("image") as File
  const data: Partial<User> = {}
  if (image && image.size !== 0) {
    const arrayBuffer = await image.arrayBuffer()
    const Body = new Uint8Array(arrayBuffer)
    const fileExt = image.name.split(".")
    const Key = `profilePicture/${userId}.${fileExt[fileExt.length - 1]}`
    const upload = new Upload({
      client: s3,
      params: { Bucket, Key, Body },
    })
    const res = await upload.done()

    data.image = res.Location || ""
  }
  if (name && typeof name === "string") {
    data.name = name
  }

  const user = await prisma.user.update({
    where: { id: userId },
    data,
  })
  if (!user) return
}
