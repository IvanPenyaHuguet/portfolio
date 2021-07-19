import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import tw, { styled } from "twin.macro";
import ReactFlagsSelect from "react-flags-select";
import { Tooltip } from "components/Exports";
import { useResponsiveContext } from "hooks/HookExports";

const LanguageSelectorContainer = styled.div({
  ...tw`relative`,
});

const LanguageSelector = styled.select({
  ...tw`relative top-1/2 transform`,
});

export default function SelectLanguage() {
  const { t, i18n } = useTranslation("common");
  const responsiveSize = useResponsiveContext();
  const [language, setLanguage] = useState(
    i18n.language === "es" ? "ES" : "GB"
  );
  const showWidth = responsiveSize !== "lg" && responsiveSize !== "md";

  useEffect(() => {
    i18n.changeLanguage(language === "ES" ? "es" : "en");
  }, [language, i18n]);

  return (
    <LanguageSelectorContainer>
      <Tooltip text={t("language.select")}>
        <ReactFlagsSelect
          selected={language}
          onSelect={(code) => setLanguage(code)}
          countries={["ES", "GB"]}
          customLabels={{
            ES: t("language.spanish"),
            GB: t("language.english"),
          }}
          showSelectedLabel={showWidth}
          showOptionsLabel={showWidth}
          selectedSize={20}
        />
      </Tooltip>
    </LanguageSelectorContainer>
  );
}
