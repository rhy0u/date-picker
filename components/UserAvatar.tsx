import { auth } from "@/auth"
import Image from "next/image"

export default async function UserAvatar() {
  const session = await auth()

  if (!session?.user || !session.user.image) return null

  return (
    <div>
      <Image
        src={session.user.image}
        className="rounded-full"
        alt="User Avatar"
        width={40}
        height={40}
        priority
      />
    </div>
  )
}
