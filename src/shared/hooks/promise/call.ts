/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useEffect, useState } from "react"

export const usePromise = <T>(promise: (...args: any[]) => Promise<T>, ...args: any[]) => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const refresh = () => {
    return promise.apply(undefined, args);
  }

  useEffect(() => {
    refresh()?.then(setResult)
    .catch(setError)
    .finally(() => setLoading(false))
  }, [...args]);

  return { result, refresh, error, loading, }
} 