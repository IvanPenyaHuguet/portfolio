import ReactFullpage from "@fullpage/react-fullpage";
import { Links } from "lib/utils/Links";
import { useTranslation } from "next-i18next";

// For plugins
const pluginWrapper = () => {};

export default function FullpageWrapper({ children }) {
  const { t } = useTranslation("common");

  return (
    <ReactFullpage
      anchors={Links(t).map((link) => link.anchor)}
      sectionSelector="section"
      scrollingSpeed={1000}
      scrollBar="true"
      autoScrolling="true"
      render={(comp) => {
        return <ReactFullpage.Wrapper>{children}</ReactFullpage.Wrapper>;
      }}
    />
  );
}
