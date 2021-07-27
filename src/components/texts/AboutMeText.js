import { useTranslation } from "next-i18next";
import tw, { styled } from "twin.macro";

const TextContainer = styled.article({
  ...tw`text-white p-4`,
});

const Title = styled.h2({
  ...tw`tracking-wider text-4xl font-bold mb-5`,
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
        <Paragraph>{t("section.aboutme.first")}</Paragraph>
        <Paragraph>{t("section.aboutme.second")}</Paragraph>
      </Text>
    </TextContainer>
  );
}
