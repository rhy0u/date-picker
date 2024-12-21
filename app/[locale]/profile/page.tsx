import { auth } from "@/auth"
import { EditProfileForm } from "@/components/EditProfileForm"
import { NavigationBar } from "@/components/Navigation"
import { TypographyH1 } from "@/components/TypographyH1"
import { redirect } from "@/i18n/routing"

import { getLocale, getTranslations } from "next-intl/server"

export default async function Home() {
  const session = await auth()
  const locale = await getLocale()
  const t = await getTranslations()

  if (!session?.user?.id) return redirect({ href: "/signin", locale })
  return (
    <>
      <NavigationBar />
      <div className="size-full flex flex-col items-center p-6">
        <TypographyH1>{t("Profile.title")}</TypographyH1>
        <EditProfileForm
          userId={session.user.id}
          profilePicture={session.user.image || ""}
        />
      </div>
    </>
  )
}
