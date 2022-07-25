import styled from '@emotion/styled';
import { MobileMenu } from 'components/Exports';
import NavLinks from './nav-links';
import { useResponsive } from '@hooks/index';
import { useTranslation } from 'react-i18next';

const Header = styled.header((props) => ({
  position: 'fixed',
  width: '100%',
  boxShadow: props.theme.shadows.normal,
  height: props.theme.spacings.xxlarge,
  padding: `0 ${props.theme.spacings.xsmall}`,
  zIndex: 50,
  fontFamily: props.theme.fonts.title,
  backdropFilter: props.theme.filters.blurNormal,
  backgroundColor: props.theme.colors.softGray
}));

const HeaderContainer = styled.div((props) => ({
  width: '83.333333%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '0 auto',
  height: props.theme.spacings.xxlarge,
  [props.theme.media.md]: {
    width: '83.333333%'
  }
}));

const Title = styled.h1(({ theme }) => ({
  fontSize: theme.fonts.size.largest,
  lineHeight: theme.fonts.line.largest,
  fontWeight: theme.fonts.weight.bold,
  [theme.media.md]: {
    fontSize: theme.fonts.size.xxxlarge,
    lineHeight: theme.fonts.line.xxxlarge
  },
  [theme.media.mdland]: {
    fontSize: theme.fonts.size.xxxlarge,
    lineHeight: theme.fonts.line.xxxlarge
  }
}));

export default function NavBar() {
  const deviceSize = useResponsive();
  const { t } = useTranslation();

  return (
    <>
      {deviceSize === 'lg' || deviceSize === 'md' ? (
        <Header id='header'>
          <HeaderContainer>
            <Title>{t('navbar.nav.title')}</Title>
            <NavLinks />
          </HeaderContainer>
        </Header>
      ) : (
        <MobileMenu />
      )}
    </>
  );
}
