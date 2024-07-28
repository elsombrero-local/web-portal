import React from "react"
import { FliptClient } from "@/api/clients/flipt"
import { NotFound } from "../NotFound/NotFound";
import { Disabled } from "../Disabled/Disabled";
import { FliptFlag } from "@/type/flipt";

export const FeatureFlagServerProvider = async ({children, flag}: {children: React.ReactNode, flag: string}) => {
  try{
    const { data } = await FliptClient.get<FliptFlag>(`/namespaces/hub/flags/${flag}`);
    if (!data.enabled) return Disabled();
    return <>{children}</>;
  }catch(e) {
    return NotFound();
  }
}
