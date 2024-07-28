
export interface FliptFlag {
  namespaceKey: string,
  key: string,
  name: string,
  description: string,
  enabled: boolean,
  createdAt: string,
  updatedAt: string,
  variants: {
    id: string,
    namespaceKey: string,
    flagKey: string,
    key: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    attachment: string
  } [],
  type: string
}