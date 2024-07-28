import { FeatureFlagServerProvider } from "../../../shared/components/Providers/FeatureFlag/Server/FeatureFlag";

export default async function AppsPage() {
  return (
    <FeatureFlagServerProvider flag="apps">
      <p>App Page</p>
    </FeatureFlagServerProvider>
  )
} 