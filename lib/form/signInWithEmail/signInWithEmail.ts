import { z } from "zod"

export const signInWithEmailValidationSchema = z.object({
  email: z.string().email(),
})

export type SignInWithEmailType = z.infer<
  typeof signInWithEmailValidationSchema
>

export type State = {
  status: "success"
  message: string
} | null
