import { RefObject } from "react"

export type PageProvider = {
  actions: {[key: string]: unknown},
  refs: {[key: string]: RefObject<unknown>},
  states: {
    [key: string]: {
      set: unknown,
      get: unknown, 
    }
  }
}

export type PageProviders = { [key: string]: PageProvider }