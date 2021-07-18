import { useTranslation } from "next-i18next";
import tw, { styled } from "twin.macro";

const Text = styled.span({
  ...tw`text-black absolute left-60 top-2/3 bottom-1/3 z-50`,
});

const Paragraph = styled.p({
  ...tw``,
});
const Paragraph2 = styled.p({
  ...tw``,
});

export default function IntroductionText() {
  const { t } = useTranslation("common");
  return (
    <Text>
      <Paragraph>Welcome!</Paragraph>
      <Paragraph2>Second line of full text</Paragraph2>
    </Text>
  );
}
