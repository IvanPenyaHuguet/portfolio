import ReactFullpage from "../lib/fullpage/Wrapper";
import { InitialSection, MainHead } from "../components/Exports";
import GlobalStylesCustom from "../styles/GlobalStylesCustom";

import { useTranslation } from "next-i18next";

export default function Index() {
  const { t } = useTranslation("footer");
  return (
    <div className="App">
      <GlobalStylesCustom />
      <MainHead />
      <ReactFullpage>
        <InitialSection />
        <InitialSection />
      </ReactFullpage>
    </div>
  );
}
