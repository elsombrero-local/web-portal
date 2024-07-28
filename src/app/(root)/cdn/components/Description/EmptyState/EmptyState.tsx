import Image from "next/image"

export const EmptyState = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 h-full w-full">
      <i className="lni lni-empty-file text-8xl"></i>
      <p className="font-semibold text-2xl">
        Select a file
      </p>
    </div>
  )
}