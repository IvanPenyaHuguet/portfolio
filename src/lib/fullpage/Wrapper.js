import ReactFullpage from "@fullpage/react-fullpage";

// For plugins
const pluginWrapper = () => {};

export default function fullpageWrapper({ children }) {
  return (
    <ReactFullpage
      licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
      anchors={["Initial", "Introduction", "Technologies", "LARS"]}
      sectionSelector="section"
      scrollingSpeed={1000}
      scrollBar={true}
      autoScrolling={true}
      render={(comp) => {
        return <ReactFullpage.Wrapper>{children}</ReactFullpage.Wrapper>;
      }}
    />
  );
}
