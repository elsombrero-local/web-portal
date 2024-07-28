import { FeatureFlagServerProvider } from "../../../shared/components/Providers/FeatureFlag/Server/FeatureFlag";

export default async function MediaPage() {
  return (
    <FeatureFlagServerProvider flag="media">
      <p>Media Page</p>
    </FeatureFlagServerProvider>
  )
} 