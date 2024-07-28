import { FeatureFlagServerProvider } from "../../../shared/components/Providers/FeatureFlag/Server/FeatureFlag";

export default async function MonitoringPage() {
  return (
    <FeatureFlagServerProvider flag="monitoring">
      <p>Monitoring Page</p>
    </FeatureFlagServerProvider>
  )
} 