'use client';
import { FileItemProps } from "../../Items/Items";
import { File } from "../../../providers/server/files/files";
import { useIcon } from "../../../providers/client";
import { usePathname, useRouter } from "next/navigation";

type ListViewProps = {
  component: (props: FileItemProps) => JSX.Element;
  isRoot?: boolean;
  files: File[];
}

export const ListView = ({component, isRoot, files}: ListViewProps) => {
  const parse = useIcon();
  const router = useRouter();
  const basepath = usePathname();
  const navigate = (path: string, isDir: boolean) => () => isDir && router.push(`${basepath}/${path}`);

  return (
    <>
      {!isRoot && component({
        isFolder: true,
        onClick: navigate('..', true),
        children: '...',
      })}
      {files.map((file) => (
        component({
          onClick: navigate(file.name, file.isDir),
          isFolder: file.isDir,
          icon: parse(file.name),
          key: `directory-${file.name}`,
          children: file.name,
        })
      ))}
    </>
  )
}