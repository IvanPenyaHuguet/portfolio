import { useState } from "react";
import { useInterval } from "hooks/HookExports";
import { TextGhostAnimation } from "components/Exports";
import { useTranslation } from "next-i18next";
import tw, { styled } from "twin.macro";

const Wrapper = styled.div({
  ...tw`font-code font-medium tracking-wide
    text-4xl
    xs:text-2xl
    sm:text-2xl
    smland:text-xl
    mdland:text-2xl mdland:leading-10
  `,
});
const InitialWords = styled.span({});

export default function IntroductionChangeableText() {
  const { t } = useTranslation("common");
  const phrasesArray = [
    t("section.introduction.secondline.innovation"),
    t("section.introduction.secondline.motivation"),
    t("section.introduction.secondline.commitment"),
    t("section.introduction.secondline.overcoming"),
    t("section.introduction.secondline.cooperation"),
  ];
  const [itemShowed, setItemShowed] = useState(phrasesArray[0].toUpperCase());
  const [count, setCount] = useState(1);

  useInterval(() => {
    setItemShowed(
      phrasesArray[Math.ceil(count % phrasesArray.length)].toUpperCase()
    );
    setCount(count + 1);
  }, 6000);

  return (
    <Wrapper>
      <InitialWords>
        {t("section.introduction.secondline.firstwords").toUpperCase()}
      </InitialWords>
      <TextGhostAnimation text={itemShowed} />
    </Wrapper>
  );
}
