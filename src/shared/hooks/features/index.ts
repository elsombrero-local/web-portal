
import { FliptFlag } from '../../../type/flipt';

export const useFeature = (flags: FliptFlag[]) => (key: string) => {
  const flag = flags.find(f => f.key === key);
  return !!flag?.enabled;
}