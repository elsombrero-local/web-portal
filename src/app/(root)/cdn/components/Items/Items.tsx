
export type FileItemProps = {
  children: string;
  icon?: string;
  isFolder?: boolean;
  onClick?: (filename?: string) => void;
  onAction?: () => void;
  key?: string;
}