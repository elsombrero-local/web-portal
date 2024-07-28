import { Card } from "@/ui/components/Cards/Card/Card"
import { DescriptionItem } from "./Item/Item"
import Image from "next/image"
import { EmptyState } from "./EmptyState/EmptyState"
import { File } from "../../providers/server/files/files"
import { useIcon } from "../../providers/client"
import { DateTime } from "luxon"
import { usePathname } from "next/navigation"

export const FileDescription = ({file}: {file?: File}) => {
  const pathname = usePathname().replace('/cdn/', '');
  const parse = useIcon();

  return (
    <Card className="shadow-none bg-zinc-900 flex flex-col min-h-[80vh]">
      {!file && <EmptyState />}
      {file && <div className="flex flex-col gap-4 w-full h-full ">
        <div className="flex items-center justify-center mb-8 flex-col gap-4">
          <Image
            width={100}
            height={100}
            alt="image"
            src={parse(file.name)}
          />
          <p className="text-center max-w-[400px] break-all">{file.name}</p>
        </div>
        <div className="flex flex-col gap-4">
          <DescriptionItem title="File size">
            {`${(file.size / 1000000).toFixed(1)} MB (${file.size} Bytes)`}
          </DescriptionItem>
          <DescriptionItem title="Create at">
            {DateTime.fromJSDate(file.createdAt).toFormat('dd/MM/yyyy HH:mm')}
          </DescriptionItem>
          <DescriptionItem title="Last update">
          {DateTime.fromJSDate(file.updatedAt).toFormat('dd/MM/yyyy HH:mm')}
          </DescriptionItem>
        </div>
        <div className="flex justify-center items-center gap-10 h-full mt-6">
            <Image
              className="w-fit h-[260px] rounded-lg object-cover object-center"
              width={0}
              height={0}
              sizes="100%"
              unoptimized
              alt="image"
              onError={(img) => img.currentTarget.src = '/emptiness.png'}
              src={`https://cdn.elsombrero.pro/${pathname}/${file.name}`}
            />
        </div>
      </div>}
    </Card>
  )
}