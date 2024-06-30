"use client";
import { UserInfo } from "./UserInfo/UserInfo"
import { Item } from "./Item/Item"
import { usePathname } from "next/navigation";
import { useSidenavNavigation } from "./providers";

export const Sidenav = () => {
  const pathname = usePathname();
  const { extra: { routes }, } = useSidenavNavigation(pathname)

  return (
    <nav className="flex flex-col justify-between h-screen w-[220px] bg-zinc-900 pt-20 pb-5 gap-5">
      <div className="flex flex-col gap-5">
        <UserInfo />
        <div className="flex flex-col gap-2">
          {routes.map((route) => (
            <Item
              key={route.title}
              href={route.path}
              icon={route.icon}
              active={route.active()}
            >
              {route.title}
            </Item>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 border-t border-t-zinc-800 pt-6">
          <Item href="/" icon="lni-github-original">Github</Item>
          <Item href="/apps" icon="lni-envelope">Messages</Item>
        </div>
    </nav>
  )
}