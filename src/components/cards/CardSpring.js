import tw, { styled, theme } from "twin.macro";
import { SpringLogo } from "media/svg/SVGExports";
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

export default function CardJava() {
  const deviceSize = useResponsiveContext();
  const { t } = useTranslation("common");

  return (
    <CardContainer score={3} color={theme`colors.spring`} bgtext="'Spring'">
      {(mouseHover) => (
        <>
          <LogoContainer>
            <CircleContainer>
              <SpringLogo width={80} height={80} />
            </CircleContainer>
            <LogoTitle>{t("section.knowledge.cards.spring.title")}</LogoTitle>
          </LogoContainer>
          <DescriptionContainer inProp={mouseHover}>
            <DescriptionText>
              {t("section.knowledge.cards.spring.description")}
              <br />
              {t("section.knowledge.cards.spring.description2")}
            </DescriptionText>
          </DescriptionContainer>
        </>
      )}
    </CardContainer>
  );
}
