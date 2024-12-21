import { User } from "@auth/core/types"
import { User as UserImage } from "lucide-react"
import Image from "next/image"

export default async function UserAvatar({ user }: { user: User }) {
  return (
    <div className="relative w-10 h-10 bg-slate-400 rounded-full">
      {user.image ? (
        <Image
          src={user.image}
          className="rounded-full"
          alt="User Avatar"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      ) : (
        <UserImage width={40} height={40} />
      )}
    </div>
  )
}
