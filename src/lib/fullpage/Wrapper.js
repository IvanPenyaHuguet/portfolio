import ReactFullpage from "@fullpage/react-fullpage";
import { Links } from "lib/utils/links";
import { useTranslation } from "react-i18next";
import { useResponsiveContext } from "hooks/HookExports";
import { useRouter } from "next/router";

// For plugins
const pluginWrapper = () => {};

export default function FullpageWrapper({ children }) {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <ReactFullpage
      anchors={Links(t).map((link) => link.anchor)}
      sectionSelector="section"
      scrollingSpeed={1000}
      scrollBar="true"
      autoScrolling={useResponsiveContext === "lg" ? "true" : "false"}
      render={(comp) => {
        return <ReactFullpage.Wrapper>{children}</ReactFullpage.Wrapper>;
      }}
      onLeave={(origin, destination, direction) => {
        router.replace("/#" + destination.anchor);
      }}
    />
  );
}
