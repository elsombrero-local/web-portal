'use client';
import React from "react"
import { FliptClient } from "../../../../../api/clients/flipt"
import { Disabled } from "../Disabled/Disabled";
import { NotFound } from "../NotFound/NotFound";
import { FliptFlag } from "../../../../../type/flipt";
import { usePromise } from "../../../../hooks/promise/call";

export const FeatureFlagClientProvider = ({children, flag}: {children: React.ReactNode, flag: string}) => {
  const { result, error, loading } = usePromise(FliptClient.get<FliptFlag>, `/namespaces/hub/flags/${flag}`);

  if (loading) return <div>Loading</div>
  if(error) return NotFound();
  if (!result?.data?.enabled) return Disabled();
  return <>{children}</>;

}