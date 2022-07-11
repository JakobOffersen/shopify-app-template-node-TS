declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BACKEND_PORT: string
      FRONTEND_PORT: string
      NODE_ENV: "test" | "production"

      SHOPIFY_API_KEY: string
      API_SECRET_KEY: string

      SHOP: string
      SCOPES: string
      HOST: string

      SHOPIFY_CLI_NO_ANALYTICS: string

      NGROK_AUTHENTICATION_TOKEN: string
      NGROK_CONFIG_PATH: string
    }
  }
}
export {};