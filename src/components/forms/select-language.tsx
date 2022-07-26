import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { useResponsive } from '@hooks/index';
import { Dropdown, DropdownProps } from 'primereact/dropdown';
import EsFlag from '@media/svg/flags/es';
import GbFlag from '@media/svg/flags/gb';
import { TFunction } from 'i18next';

type Country = {
  label: string;
  code: string;
  flag: React.ReactElement;
};

const LanguageSelectorContainer = styled.div(({ theme }) => ({
  position: 'relative',
  fontSize: theme.fonts.size.xlarge,
  lineHeight: theme.fonts.line.xlarge
}));

const SelectedCountryTemplate = (
  props?: DropdownProps,
  showWidth?: boolean
) => {
  if (!props?.value) {
    return <div>{props?.placeholder}</div>;
  }
  const country = props.value as Country;
  return (
    <div>
      {country.flag}
      {showWidth && <span>{country.label}</span>}
    </div>
  );
};

const OptionCountryTemplate = (option: Country, showWidth?: boolean) => {
  return (
    <div>
      {option.flag}
      {showWidth && <span>{option.label}</span>}
    </div>
  );
};

export default function SelectLanguage() {
  const { t, i18n } = useTranslation();
  const responsiveSize = useResponsive();
  const showWidth =
    responsiveSize === 'lg' ||
    responsiveSize === 'md' ||
    responsiveSize === 'xl';

  const LanguagesOptions = [
    {
      code: 'en',
      label: t('language.english'),
      flag: <GbFlag width={30} height={20} />
    },
    {
      code: 'es',
      label: t('language.spanish'),
      flag: <EsFlag width={30} height={20} />
    }
  ];

  const [language, setLanguage] = useState<Country>(
    i18n.language === 'es' ? LanguagesOptions[0] : LanguagesOptions[1]
  );

  const handleLanguageChange = (event: { value: Country }) => {
    console.log(event);
    setLanguage(event.value);
    i18n.changeLanguage(event.value.code).catch(console.error);
  };

  return (
    <LanguageSelectorContainer>
      <Dropdown
        value={language}
        options={LanguagesOptions}
        onChange={handleLanguageChange}
        placeholder={t('language.select')}
        valueTemplate={(_opt, props) =>
          SelectedCountryTemplate(props, showWidth)
        }
        itemTemplate={(opt) => OptionCountryTemplate(opt as Country, showWidth)}
      />
    </LanguageSelectorContainer>
  );
}
