import ReactFullpage from "@fullpage/react-fullpage";

// For plugins
const pluginWrapper = () => {};

export default function fullpageWrapper({ children }) {
  return (
    <ReactFullpage
      anchors={["firstPage", "secondPage"]}
      sectionSelector="section"
      scrollingSpeed={1000}
      navigation
      scrollbar
      render={(comp) => {
        return <ReactFullpage.Wrapper>{children}</ReactFullpage.Wrapper>;
      }}
    />
  );
}
