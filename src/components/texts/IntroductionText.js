import { useTranslation } from "next-i18next";
import tw, { styled } from "twin.macro";
import { IntroductionChangeableText } from "components/Exports";

const Text = styled.article({
  ...tw`text-black absolute left-60 top-1/2 z-50`,
});

const Paragraph = styled.h4({
  ...tw`font-code text-7xl font-bold leading-loose tracking-wider`,
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
