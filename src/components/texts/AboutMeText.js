import { useTranslation } from "next-i18next";
import tw, { styled } from "twin.macro";

const TextContainer = styled.article({
  ...tw`text-white p-4`,
});

const Title = styled.h2({
  ...tw`tracking-wider font-title
  text-5xl font-bold mb-5 
  sm:text-4xl xs:text-3xl`,
});
const Text = styled.div({
  ...tw`font-text text-justify
     text-xl font-medium sm:text-lg xs:text-base`,
});

const Paragraph = styled.p({
  ...tw`mb-8 sm:mb-6 xs:mb-4`,
  textIndent: "2rem",
});

export default function AboutMeText() {
  const { t } = useTranslation("common");
  return (
    <TextContainer>
      <Title>{t("section.aboutme.title")}</Title>
      <Text>
        <Paragraph>{t("section.aboutme.first")}</Paragraph>
        <Paragraph>{t("section.aboutme.second")}</Paragraph>
        <Paragraph>{t("section.aboutme.third")}</Paragraph>
      </Text>
    </TextContainer>
  );
}
