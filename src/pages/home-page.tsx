import {
  InitialSection,
  AboutMeSection,
  KnowledgeSection,
  ProjectsSection,
  ContactSection
} from '@components/index';

export default function HomePage() {
  return (
    <div>
      <InitialSection />
      <AboutMeSection />
      <KnowledgeSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
