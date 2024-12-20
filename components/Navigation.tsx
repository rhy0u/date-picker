import SignOut from "./auth/SignoutButton"
import UserAvatar from "./UserAvatar"

export const NavigationBar = () => {
  return (
    <div className="flex w-full p-2 shadow">
      <div className="flex-grow flex justify-center">
        <SignOut />
      </div>

      <UserAvatar />
    </div>
  )
}
