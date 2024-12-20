import { auth } from "@/auth"
import { NavigationBar } from "@/components/Navigation"
import { redirect } from "@/i18n/routing"
import { getLocale } from "next-intl/server"

export default async function Home() {
  const session = await auth()
  const locale = await getLocale()

  if (!session?.user) redirect({ href: "/signin", locale })
  return (
    <div className="size-full">
      <NavigationBar />
    </div>
  )
}
