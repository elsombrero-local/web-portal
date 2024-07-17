import Image from "next/image"
import { FileItemProps } from "../Items"
import clsx from "clsx"

export const FileGridItem = ({children, isFolder, onClick, icon, selected, key}: FileItemProps) => {
  return (
    <div
      key={key}
      onClick={() => onClick && onClick(children)}
      className={clsx(
        'flex flex-col justify-center items-center p-2 w-[120px]',
        'rounded-lg',
        'hover:bg-black hover:bg-opacity-30 active:bg-opacity-40 cursor-pointer',
        selected && 'bg-black bg-opacity-30'
      )}>
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