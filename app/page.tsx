import { AboutSection } from "./components/home/about-section";
import { CultureSection } from "./components/home/culture-section";
import { FaqSection } from "./components/home/faq-section";
import { HeroSection } from "./components/home/hero-section";
import { MenteeVisionSection } from "./components/home/mentee-vision-section";
import { MomentsSection } from "./components/home/moments-section";
import { TimelineSection } from "./components/home/timeline-section";
import { PageShell } from "./components/layout/page-shell";

export default function Home(): React.JSX.Element {
  return (
    <PageShell>
      <HeroSection />
      <TimelineSection />
      <AboutSection />
      <CultureSection />
      <MenteeVisionSection />
      <MomentsSection />
      <FaqSection />
    </PageShell>
  );
}
