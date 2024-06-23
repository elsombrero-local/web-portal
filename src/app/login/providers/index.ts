import { submit } from "./actions/login"


export const useLogin = () => {
  return { actions: { submit } }
}