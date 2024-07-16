import Image from "next/image"
import { FileItemProps } from "../Items"

export const FileGridItem = ({children, isFolder, onClick, icon}: FileItemProps) => {
  return (
    <div
      onClick={() => onClick && onClick(children)}
      className="flex flex-col justify-center items-center p-2 w-[120px] rounded-lg hover:bg-black hover:bg-opacity-30 active:bg-opacity-40 cursor-pointer">
      {isFolder ? 
        <i className="lni text-sky-600 text-6xl lni-folder"></i>
      : icon && <Image
        width={65}
        height={65}
        alt="icon"
        src={icon}
      />}
      <small className="max-w-[100px] truncate">{children}</small>
    </div>
  )
}