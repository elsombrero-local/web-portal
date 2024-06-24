import { UserInfo } from "./UserInfo/UserInfo"
import { Item } from "./Item/Item"

export const Sidenav = () => {
  return (
    <nav className="flex flex-col h-screen w-[220px] bg-zinc-900 py-20 gap-7">
      <UserInfo />
      <div className="flex flex-col gap-2">
        <Item href="/" icon="lni-home" active>Home</Item>
        <Item href="/apps" icon="lni-grid-alt">Apps</Item>
        <Item href="/apps" icon="lni-code">CDN</Item>
        <Item href="/apps" icon="lni-dashboard">Servers</Item>
      </div>
    </nav>
  )
}