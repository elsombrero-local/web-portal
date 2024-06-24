import clsx from "clsx"
import Link from "next/link"

type ItemProps = {
  children: string,
  icon: string,
  active?: boolean,
  href: string,
}

export const Item = ({href, children, icon, active}: ItemProps) => {
  return (
    <Link href={href} className="flex flex-col">
      <strong className={clsx(
        'text-zinc-100',
        'w-full flex items-center gap-4 px-8 py-2',
        active && 'bg-black bg-opacity-40',
      )}>
        <i className={clsx(
          `lni ${icon}`,
          active && 'text-yellow-200',
        )} />
        {children}
      </strong>
    </Link>
  )
}