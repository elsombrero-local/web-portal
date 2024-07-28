'use client';
import { Card } from "@/ui/components/Cards/Card/Card";
import { File } from "../../providers/server/files/files";
import { Button } from "@/ui/components/Forms/Button/Button";
import { FileGridItem } from "../Items/Grid/Grid";
import { ListView } from "./View/View";
import { FileDescription } from "../Description/Description";
import { useState } from "react";

export const Files = ({files, isRoot}: {files: File[], isRoot?: boolean}) => {

  const [selectedFile, setSelectedFile] = useState<File | undefined>();

  return (
      <div className="flex gap-4 h-full">
        <div className="w-3/12 flex flex-col gap-4">
          <FileDescription file={selectedFile} />
        </div>
        <Card className="w-9/12 shadow-none bg-zinc-900 flex flex-col gap-7 h-full">
          <div className="flex items-center justify-between">
              <p className="text-lg">Files</p>
              <Button theme="light" size="sm" variant="ghost">
                <i className="lni lni-folder"></i>
                Create folder
              </Button>
            </div>

            <div className="flex gap-4 flex-wrap">
              <ListView
                onFileSelected={setSelectedFile}
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
      </div>
  )
}