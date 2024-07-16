import { getIcon } from "material-file-icons";

export const useIcon = () => {
  const parse = (filename: string) => {
    const { svg } = getIcon(filename);
    const base64 = Buffer.from(svg).toString('base64');
    return `data:image/svg+xml;base64,${base64}`;
  }
  return parse;
}