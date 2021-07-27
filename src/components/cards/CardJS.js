import tw, { styled, theme } from "twin.macro";
import JSLogo from "media/svg/JSLogo";
import { useResponsiveContext } from "hooks/HookExports";
import { useTranslation } from "next-i18next";
import {
  DescriptionContainer,
  DescriptionText,
  LogoContainer,
  LogoTitle,
  CardContainer,
} from "components/Exports";

export default function CardJS() {
  const deviceSize = useResponsiveContext();
  const { t } = useTranslation("common");

  return (
    <CardContainer score={4} color={theme`colors.js`} bgtext="'JavaScript'">
      {(mouseHover) => (
        <>
          <LogoContainer>
            <JSLogo width={80} height={80} />
            <LogoTitle>{t("section.knowledge.cards.js.title")}</LogoTitle>
          </LogoContainer>
          <DescriptionContainer inProp={mouseHover}>
            <DescriptionText>
              {t("section.knowledge.cards.js.description")}
              <br />
              {t("section.knowledge.cards.js.description2")}
            </DescriptionText>
          </DescriptionContainer>
        </>
      )}
    </CardContainer>
  );
}
