import { auth } from "@/auth"

import { Link } from "@/i18n/routing"
import { getLocale, getTranslations } from "next-intl/server"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import UserAvatar from "./UserAvatar"
import { SignOut } from "./SignOut"

export const NavigationBar = async () => {
  const session = await auth()
  const locale = await getLocale()
  const t = await getTranslations()

  if (!session?.user || !session.user.image) return null
  return (
    <div className="flex justify-end w-full shadow p-2">
      {session.user.name && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-2 ">
              <span>{session.user.name}</span>
              <UserAvatar user={session.user} />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link href="/profile" locale={locale} className="w-full">
                  {t("Profile.title")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <SignOut />
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  )
}
