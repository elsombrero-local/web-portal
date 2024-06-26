import { UserInfo } from "./UserInfo/UserInfo"
import { Item } from "./Item/Item"

export const Sidenav = () => {
  return (
    <nav className="flex flex-col justify-between h-screen w-[220px] bg-zinc-900 pt-20 pb-5 gap-5">
      <div className="flex flex-col gap-5">
        <UserInfo />
        <div className="flex flex-col gap-2">
          <Item href="/" icon="lni-home" active>Home</Item>
          <Item href="/apps" icon="lni-grid-alt">Apps</Item>
          <Item href="/apps" icon="lni-code">CDN</Item>
          <Item href="/apps" icon="lni-display">Monitoring</Item>
          <Item href="/apps" icon="lni-control-panel">Processes</Item>
          <Item href="/apps" icon="lni-image">Media</Item>
          <Item href="/apps" icon="lni-bulb">Devices</Item>
        </div>
      </div>
      <div className="flex flex-col gap-2 border-t border-t-zinc-800 pt-6">
          <Item href="/" icon="lni-github-original">Github</Item>
          <Item href="/apps" icon="lni-envelope">Messages</Item>
        </div>
    </nav>
  )
}