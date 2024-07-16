import { Button } from "../../../../ui/components/Forms/Button/Button";
import { FileDescription } from "../components/Description/Description";
import { Files } from "../components/Files/Files";
import { GetAllFile } from "../providers/server/files/files";

export default async function RootCdnPage({params: {routes}}: {params: {routes: string[]}}) {
  const files = await GetAllFile(routes || []);
  return (
    <div className="flex flex-col gap-7">
      <div className="flex items-center justify-between w-full">
        <p className="text-xl font-semibold">
          CDN Storage
        </p>
        <Button size="sm" theme="light" variant="ghost">
          <i className="lni lni-plus"></i>
          Upload files
        </Button>
      </div>
      <div className="flex gap-4 h-full">
        <div className="flex w-5/12 flex-col gap-4">
          <FileDescription />
        </div>
        <Files files={files} isRoot={!routes} />
      </div>
    </div>
  )
} 