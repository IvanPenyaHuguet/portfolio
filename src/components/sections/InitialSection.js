import { SectionWrapper, MyPhoto, IntroductionText } from "components/Exports";
import { useTranslation } from "next-i18next";
import tw, { styled } from "twin.macro";

const BgContainer = styled.div({
  ...tw`w-full h-full`,
  "::before": {
    ...tw`absolute top-0 left-0 w-full h-full`,
    content: '""',
    background: "linear-gradient(#f00, #f0f)",
    clipPath: "circle(25% at right 60%)",
  },
  "::after": {
    ...tw`absolute top-0 left-0 w-full h-full`,
    content: '""',
    background: "linear-gradient(#2196f3, #e91e63)",
    clipPath: "circle(20% at 10% 15%)",
  },
});

const TextContainer = styled.div({
  ...tw``,
});
const Container = styled.div({
  ...tw`z-10`,
});

export default function InitialSection() {
  const { t } = useTranslation("common");
  return (
    <SectionWrapper>
      <BgContainer>
        <Container>
          <MyPhoto />
          <IntroductionText />
        </Container>
      </BgContainer>
    </SectionWrapper>
  );
}
