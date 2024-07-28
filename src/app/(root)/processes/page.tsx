import { FeatureFlagServerProvider } from "../../../shared/components/Providers/FeatureFlag/Server/FeatureFlag";

export default async function ProcessesPage() {
  return (
    <FeatureFlagServerProvider flag="processes">
      <p>Processes Page</p>
    </FeatureFlagServerProvider>
  )
} 