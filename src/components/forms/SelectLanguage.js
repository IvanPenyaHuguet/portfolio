import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import tw, { styled } from "twin.macro";
import ReactFlagsSelect from "react-flags-select";
import { useRouter } from "next/router";
import { Tooltip } from "components/Exports";
import { useResponsiveContext } from "hooks/HookExports";

const LanguageSelectorContainer = styled.div({
  ...tw`relative text-lg`,
});

export default function SelectLanguage({
  selectedSize = 25,
  optionsSize = 40,
}) {
  const { t, i18n } = useTranslation("common");
  const responsiveSize = useResponsiveContext();
  const router = useRouter();
  const [language, setLanguage] = useState(
    i18n.language === "es" ? "ES" : "GB"
  );
  const showWidth = responsiveSize !== "lg" && responsiveSize !== "md";

  const onLanguageChange = (code) => {
    const newLang = code === "ES" ? "es" : "en";
    i18n.changeLanguage(newLang);    
    router.push(
      router.pathname,
      router.pathname,
      { locale: newLang }
    );
    router.push(
      router.pathname,
      router.pathname,
      { locale: newLang }
    );    
  };

  return (
    <LanguageSelectorContainer>
      {/* <Tooltip text={t("language.select")}> */}
      <ReactFlagsSelect
        selected={language}
        onSelect={(code) => onLanguageChange(code)}
        countries={["ES", "GB"]}
        customLabels={{
          ES: t("language.spanish"),
          GB: t("language.english"),
        }}
        showSelectedLabel={showWidth}
        showOptionLabel={showWidth}
        selectedSize={selectedSize}
        optionsSize={optionsSize}
      />
      {/* </Tooltip> */}
    </LanguageSelectorContainer>
  );
}
