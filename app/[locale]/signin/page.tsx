import { auth, signIn } from "@/auth"
import { EmailForm } from "@/components/auth/LoginForm"
import { Separator } from "@/components/Or"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { redirect } from "@/i18n/routing"
import { getLocale, getTranslations } from "next-intl/server"

const PROVIDERS = ["google", "github"]

export default async function SignIn() {
  const session = await auth()
  const locale = await getLocale()
  const t = await getTranslations()
  if (session?.user) redirect({ href: "/", locale })

  return (
    <Card className="absolute md:translate-x-2/4 md:right-2/4 top-1/4 md:w-[500px] w-full flex flex-col gap-2 align-middle border p-2">
      <CardTitle className="pb-2">{t("Signin.title")}</CardTitle>
      <CardContent>
        <EmailForm />
        <form
          action={async (formData: FormData) => {
            "use server"

            const provider = formData.get("provider")

            if (typeof provider !== "string" || !PROVIDERS.includes(provider))
              return

            await signIn(provider, { redirectTo: "/" })
          }}
          className="size-full"
        >
          <div className="m-auto flex flex-col gap-2">
            {PROVIDERS.map((provider) => (
              <div key={provider}>
                <Separator />
                <Button
                  type="submit"
                  name="provider"
                  value={provider}
                  className="w-full"
                >
                  {t(`Signin.button.${provider}`)}
                </Button>
              </div>
            ))}
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
