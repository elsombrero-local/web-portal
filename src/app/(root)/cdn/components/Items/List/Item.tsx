import Image from "next/image";
import { FileItemProps } from "../Items";

export const FileListItem = ({children, icon, isFolder, onClick}: FileItemProps) => {
  return (
    <div
      onClick={() => onClick && onClick(children)}
      className="flex px-4 py-6 rounded-lg justify-between bg-zinc-950 items-center hover:opacity-70 cursor-pointer active:opacity-60">
      <div className="flex gap-4 items-center">
        {isFolder ? 
          <i className="lni text-sky-600 text-lg lni-folder"></i>
        : icon && <Image
          width={25}
          height={25}
          alt="icon"
          src={icon}
        />}
        <span className="">{children}</span>
      </div>
      <i className="lni lni-more-alt"></i>
    </div>
  )
}