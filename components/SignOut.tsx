import { signOut } from "@/auth"
import { getTranslations } from "next-intl/server"

export async function SignOut() {
  const t = await getTranslations()
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
      className="w-full"
    >
      <button type="submit" className="w-full flex justify-start">
        {t("Signout.button")}
      </button>
    </form>
  )
}
