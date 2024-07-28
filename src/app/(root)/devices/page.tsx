import { FeatureFlagServerProvider } from "../../../shared/components/Providers/FeatureFlag/Server/FeatureFlag";

export default async function DevicesPage() {
  return (
    <FeatureFlagServerProvider flag="devices">
      <p>Devices Page</p>
    </FeatureFlagServerProvider>
  )
} 