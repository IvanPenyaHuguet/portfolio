import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { useResponsive } from '@hooks/index';
import { Dropdown, DropdownProps } from 'primereact/dropdown';
import EsFlag from '@media/svg/flags/es';
import GbFlag from '@media/svg/flags/gb';
import { ClassNames } from '@emotion/react';

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

const FlagLabelContainer = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacings.small
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
    <FlagLabelContainer>
      {country.flag}
      {showWidth && <span>{country.label}</span>}
    </FlagLabelContainer>
  );
};

const OptionCountryTemplate = (option: Country, showWidth?: boolean) => {
  return (
    <FlagLabelContainer>
      {option.flag}
      {showWidth && <span>{option.label}</span>}
    </FlagLabelContainer>
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
    const oldLanguage = language;
    setLanguage(event.value);
    i18n.changeLanguage(event.value.code).catch((err) => {
      console.error(err);
      setLanguage(oldLanguage);
    });
  };

  return (
    <LanguageSelectorContainer>
      <ClassNames>
        {({ css }) => (
          <Dropdown
            className={css({
              width: showWidth ? '155px' : '69px',
              '& .p-dropdown-trigger': {
                width: showWidth ? '42px' : '25px'
              },
              '& .p-dropdown-label': {
                padding: showWidth ? '10px' : '6px'
              }
            })}
            value={language}
            options={LanguagesOptions}
            onChange={handleLanguageChange}
            placeholder={t('language.select')}
            valueTemplate={(_opt, props) =>
              SelectedCountryTemplate(props, showWidth)
            }
            itemTemplate={(opt) =>
              OptionCountryTemplate(opt as Country, showWidth)
            }
          />
        )}
      </ClassNames>
    </LanguageSelectorContainer>
  );
}
