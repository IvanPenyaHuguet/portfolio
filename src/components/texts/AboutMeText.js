import { useTranslation } from "next-i18next";
import tw, { styled } from "twin.macro";

const TextContainer = styled.article({
  ...tw`text-white`,
});

const Title = styled.h2({
  ...tw`tracking-wider text-4xl font-bold my-5`,
});
const Text = styled.div({
  ...tw``,
});

const Paragraph = styled.p({
  ...tw``,
});

export default function AboutMeText() {
  const { t } = useTranslation("common");
  return (
    <TextContainer>
      <Title>{t("section.aboutme.title")}</Title>
      <Text>
        <Paragraph>First</Paragraph>
        <Paragraph>Second</Paragraph>
      </Text>
    </TextContainer>
  );
}
