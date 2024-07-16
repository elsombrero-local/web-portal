'use client';
import { Card } from "@/ui/components/Cards/Card/Card";
import { File } from "../../providers/server/files/files";
import { Button } from "@/ui/components/Forms/Button/Button";
import { FileGridItem } from "../Items/Grid/Grid";
import { ListView } from "./View/View";
import { FileListItem } from "../Items/List/Item";

export const Files = ({files, isRoot}: {files: File[], isRoot?: boolean}) => {

  return (
    <Card className="w-full shadow-none bg-zinc-900 flex flex-col gap-7 h-full">
      <div className="flex items-center justify-between">
          <p className="text-lg">Files</p>
          <Button theme="light" size="sm" variant="ghost">
            <i className="lni lni-folder"></i>
            Create folder
          </Button>
        </div>

        <div className="flex gap-4 flex-wrap">
          <ListView
            component={FileGridItem}
            isRoot={isRoot}
            files={files}
          />
        </div>

        {/* <div className="flex flex-col gap-2">
          <ListView
            component={FileListItem}
            isRoot={isRoot}
            files={files}
          />
        </div> */}
    </Card>
  )
}