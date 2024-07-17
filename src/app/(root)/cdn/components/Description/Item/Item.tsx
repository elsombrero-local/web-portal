
export const DescriptionItem = ({ title, children }: {title: string, children: string}) => {
  return (
    <div className="flex items-center justify-between">
      <small className="opacity-70">{title}:</small>
      <small className="text-right">{children}</small>
    </div>
  )
}