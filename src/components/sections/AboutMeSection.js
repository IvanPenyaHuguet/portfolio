import { SectionWrapper, AboutMeText } from "components/Exports";
import { useTranslation } from "next-i18next";
import tw, { styled } from "twin.macro";
import { useResponsiveContext } from "hooks/HookExports";

const BgContainer = styled.div({
  ...tw`w-full h-full relative`,
  "&:before": {
    content: "''",
    position: "absolute",
    top: "10%",
    right: "0",
    left: "0",
    bottom: "0",
    height: "80%",
    backgroundImage: "linear-gradient(45deg, #6303B1, #ff0099)",
    transform: "skewY(11deg)",
  },
});

const containerVariants = {
  xs: {
    width: "100%",
    padding: "130px 0",
  },
  sm: {
    width: "400px",
    padding: "130px 0",
  },
  md: {
    width: "700px",
    padding: "170px 0",
  },
  lg: {
    width: "1000px",
    padding: "190px 0",
  },
};

const Container = styled.div(() => [
  tw`z-10 relative mx-auto h-full`,
  ({ deviceSize = "lg" }) => containerVariants[deviceSize],
]);

const InsideContainer = styled.div({
  ...tw`h-full`,
});

export default function InitialSection() {
  const deviceSize = useResponsiveContext();
  const { t } = useTranslation("common");
  return (
    <SectionWrapper>
      <BgContainer>
        <Container deviceSize={deviceSize}>
          <InsideContainer>
            <AboutMeText />
          </InsideContainer>
        </Container>
      </BgContainer>
    </SectionWrapper>
  );
}
