import { useState } from "react";
import { useInterval } from "hooks/HookExports";
import { TextGhostAnimation } from "components/Exports";
import { useTranslation } from "next-i18next";
import tw, { styled } from "twin.macro";

const phrasesArray = ["innovation", "learning"];

const Wrapper = styled.div({
  ...tw`font-code text-4xl font-medium tracking-wide`,
});
const InitialWords = styled.span({});

export default function IntroductionChangeableText() {
  const [itemShowed, setItemShowed] = useState(phrasesArray[0].toUpperCase());
  const [count, setCount] = useState(1);
  const { t } = useTranslation("common");

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