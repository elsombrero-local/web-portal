'use client';
import { FileItemProps } from "../../Items/Items";
import { File } from "../../../providers/server/files/files";
import { useIcon } from "../../../providers/client";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

type ListViewProps = {
  component: (props: FileItemProps) => JSX.Element;
  isRoot?: boolean;
  files: File[];
  active?: boolean;
  onFileSelected?: (file: File) => void;
}

export const ListView = ({component, isRoot, files, onFileSelected}: ListViewProps) => {
  const parse = useIcon();
  const router = useRouter();
  const basepath = usePathname();
  const [selectedFile, setSelectedFile] = useState<string | undefined>();
  const onClick = (path: string, isDir: boolean, file?: File) => () => {
    if(isDir) {
      router.push(`${basepath}/${path}`);
    }else if(onFileSelected && file) {
      setSelectedFile(file.name);
      onFileSelected(file);
    }
  }

  return (
    <>
      {!isRoot && component({
        isFolder: true,
        onClick: onClick('..', true),
        children: '...',
      })}
      {files.map((file) => (
        component({
          onClick: onClick(file.name, file.isDir, file),
          isFolder: file.isDir,
          icon: parse(file.name),
          key: `directory-${file.name}`,
          children: file.name,
          selected: file.name === selectedFile
        })
      ))}
    </>
  )
}