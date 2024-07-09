import { DateTime } from "luxon"
import Image from "next/image"
import { Button } from "@/ui/components/Forms/Button/Button"
import { User } from "../../../../../../type/dev-to"

export const UserInfo = ({user, publishedAt}: {user: User, publishedAt: string}) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Image
          className="rounded-full"
          alt="profile"
          src={user.profile_image}
          width={50}
          height={50}
        />
        <div className="flex flex-col gap-1">
          <strong>{user.name}</strong>
          <div className="flex gap-1 opacity-60 items-center">
            {user.github_username && <small className="flex gap-1 items-center">
              <i className="lni lni-github-original"></i>
              {`${user.github_username} - `}
            </small>}
            <small>{DateTime.fromISO(publishedAt).toFormat('MMM dd')}</small>
          </div>
        </div>
      </div>
      <Button size="md" theme="light" variant="ghost">
        Follow
      </Button>
    </div>
  )
}