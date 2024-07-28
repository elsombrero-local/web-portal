export const Config = {
  SessionKey: 'ES_PORTAL_SESSION',
  FLIPT_API_KEY: process.env.FLIPT_API_KEY || process.env.NEXT_PUBLIC_FLIPT_API_KEY,
  FLIPT_URL: process.env.FLIPT_URL || process.env.NEXT_PUBLIC_FLIPT_URL,
  DEV_TO_URL: process.env.DEV_TO_URL || process.env.NEXT_PUBLIC_DEV_TO_URL,
}