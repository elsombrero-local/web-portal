import { WebPortalClient } from "../../../../../api";

type RequestCodeProps = {
  setPending: (state: boolean) => void,
  setCanLogin: (state: boolean) => void,
}

export const RequestCode = ({setPending, setCanLogin}: RequestCodeProps) => {
  return () => {
    setPending(true);
    WebPortalClient.get('/services/code')
    .then(() => setCanLogin(true))
    .finally(() => setPending(false))
  }
}