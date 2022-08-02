import { HeroSection } from './HeroSection';
import { VacancySection } from './VacancySection';
import { ManagementSection } from './ManagementSection';
import { HowItWorksSection } from './HowItWorksSection';
import { PoweredBySection } from './PoweredBySection';

export const LandingPage = () => {
  return (
    <section>
      <HeroSection />
      <VacancySection />
      <ManagementSection />
      <HowItWorksSection />
      <PoweredBySection />
    </section>
  );
};
