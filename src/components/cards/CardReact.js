import tw, { styled, theme } from "twin.macro";
import { ReactLogo } from "media/svg/SVGExports";
import { useResponsiveContext } from "hooks/HookExports";
import { useTranslation } from "next-i18next";
import {
  DescriptionContainer,
  DescriptionText,
  LogoContainer,
  LogoTitle,
  CardContainer,
} from "components/Exports";

const CircleContainer = styled.div({
  ...tw`z-50 bg-white rounded-full`,
  padding: "2px",
});

export default function CardReact() {
  const deviceSize = useResponsiveContext();
  const { t } = useTranslation("common");

  return (
    <CardContainer score={4} color={theme`colors.react`} bgtext="'React'">
      {(mouseHover) => (
        <>
          <LogoContainer>
            <CircleContainer>
              <ReactLogo width={80} height={80} />
            </CircleContainer>
            <LogoTitle>{t("section.knowledge.cards.react.title")}</LogoTitle>
          </LogoContainer>
          <DescriptionContainer inProp={mouseHover}>
            <DescriptionText>
              {t("section.knowledge.cards.react.description")}
              <br />
              {t("section.knowledge.cards.react.description2")}
            </DescriptionText>
          </DescriptionContainer>
        </>
      )}
    </CardContainer>
  );
}
