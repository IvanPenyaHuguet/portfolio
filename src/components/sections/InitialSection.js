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

const Container = styled.div({
  ...tw`z-10 relative m-auto transform top-1/2 -translate-y-1/2    
    w-8/12 h-3/5
    xs:flex xs:flex-col xs:justify-between xs:items-start xs:w-11/12 xs:h-5/6
    sm:flex sm:flex-col sm:justify-between sm:items-start sm:w-11/12 sm:h-5/6
    smland:flex smland:flex-row smland:justify-between smland:items-center smland:w-full smland:h-5/6 smland:px-2
    mdland:w-11/12 mdland:flex mdland:justify-between mdland:items-center mdland:flex-row-reverse
    lg:w-9/12 lg:h-3/5   
  `,
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
