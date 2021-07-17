import { SectionWrapper, MyPhoto } from "components/Exports";
import { useTranslation } from "next-i18next";
import tw, { styled } from "twin.macro";

const BgContainer = styled.div({
  ...tw`w-full h-full`,
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
          <span>Conocimientos</span>
        </Container>
      </BgContainer>
    </SectionWrapper>
  );
}
