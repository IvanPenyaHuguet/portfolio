import ReactFullpage from "lib/fullpage/Wrapper";
import {
  InitialSection,
  MainHead,
  NavBar,
  AboutMeSection,
  KnowledgeSection,
  ProjectsSection,
  ContactSection,
} from "components/Exports";
import GlobalStylesCustom from "styles/GlobalStylesCustom";

import { useTranslation } from "next-i18next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Index() {
  const { t } = useTranslation("common");
  return (
    <div className="App" id="App">
      <GlobalStylesCustom />
      <MainHead />
      <NavBar />
      <main className="MainApp" id="MainApp">
        <ReactFullpage>
          <InitialSection />
          <AboutMeSection />
          <KnowledgeSection />
          <ProjectsSection />
          <ContactSection />
        </ReactFullpage>
      </main>
    </div>
  );
}
