import OnboardingExporterContainer from '@/containers/OnboardingExporterContainer';

function ExporterOnboarding(request) {
  const { screen } = request?.searchParams;
  return <OnboardingExporterContainer screen={screen}/>
}

export default ExporterOnboarding;
