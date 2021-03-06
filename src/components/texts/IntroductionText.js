import { useTranslation } from "next-i18next";
import tw, { styled } from "twin.macro";
import { IntroductionChangeableText } from "components/Exports";

const Text = styled.article({
  ...tw`text-black z-50 absolute
  left-0 bottom-0
  smland:static
  mdland:static
  lg:left-0 lg:bottom-0
  `,
});

const Paragraph = styled.h4({
  ...tw`font-code leading-loose tracking-wider
    text-7xl font-bold 
    xs:text-2xl
    sm:text-3xl
    smland:text-2xl
    mdland:text-4xl
  `,
});

export default function IntroductionText() {
  const { t } = useTranslation("common");
  return (
    <Text>
      <Paragraph>{t("section.introduction.firstintline")}</Paragraph>
      <IntroductionChangeableText />
    </Text>
  );
}
