import { readdir, lstat, } from "fs/promises";

export type File = {
  size: number,
  updatedAt: Date,
  createdAt: Date,
  isDir: boolean,
  name: string,
  path: string,
} 

export const GetAllFile = async (routes: string[]): Promise<File[]> => {
  const basePath = `${process.env.CDN_ROOT_DIRECTORY}/${routes.join('/')}`;
  return await Promise.all((await readdir(basePath)).filter(name => name !== '.npm').map(async (name) => {
    const path = `${basePath}/${name}`;
    const res = await lstat(path);
    return {
      size: res.size,
      updatedAt: res.ctime,
      createdAt: res.birthtime,
      isDir: res.isDirectory(),
      name, path,
    }
  }));
}