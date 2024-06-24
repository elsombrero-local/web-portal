import { useState } from "react";
import { RequestCode } from "./actions/request-code";

export const useLoginWrapper = () => {
  const [canLogin, setCanLogin] = useState(false)
  const [pending, setPending] = useState(false);

  return {
    actions: { RequestCode: RequestCode({setPending, setCanLogin}) },
    states: {
      CanLogin: {
        set: setCanLogin,
        get: canLogin,
      },
      Pending: {
        set: setPending,
        get: pending,
      }
    },
    refs: {}
  }
}