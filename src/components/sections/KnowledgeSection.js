import { SectionWrapper, GroupCardKnowledge } from "components/Exports";
import { useTranslation } from "react-i18next";
import tw, { styled } from "twin.macro";

const BgContainer = styled.div({
  ...tw`w-full h-full`,
  backgroundColor: "#ffffff",
  backgroundImage: "radial-gradient(rgba(127, 127, 127, 0.3) 2px, #ffffff 2px)",
  backgroundSize: "40px 40px",
});

const Container = styled.div({
  ...tw`z-10 w-full h-full`,
});

export default function InitialSection() {
  const { t } = useTranslation("common");
  return (
    <SectionWrapper>
      <BgContainer>
        <Container>
          <GroupCardKnowledge />
        </Container>
      </BgContainer>
    </SectionWrapper>
  );
}
