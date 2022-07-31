/* import { fallDown as Menu } from "react-burger-menu"; */
import { slide as Menu } from 'react-burger-menu';
import { NavHashLink } from '@xzar90/react-router-hash-link';
import { useState } from 'react';
import { Links } from '@lib/index';
import { useTranslation } from 'react-i18next';
import { SelectLanguage } from '@components/index';
import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';
import { Theme } from '@emotion/react';

type NavLinkProps = {
  theme?: Theme;
  active: boolean;
};

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#2bd2ff',
    padding: '1rem 0.8rem',
    fontFamily: 'Libre Franklin'
  },
  bmItem: {
    display: 'block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
};

const NavLink = styled.div(({ theme, active }: NavLinkProps) => ({
  fontSize: theme?.fonts.size.xxxlarge,
  lineHeight: theme?.fonts.size.largest,
  color: active ? theme?.colors.primaryAlternate : 'inherit'
}));

const SelectLanguageWrapper = styled.div(({ theme }) => ({
  fontSize: theme.fonts.size.large,
  lineHeight: theme.fonts.size.large,
  paddingTop: '2rem'
}));

export default function MobileMenu() {
  const { t } = useTranslation('common');
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOnClose = () => {
    setMenuOpen(false);
  };
  const handleOnOpen = () => {
    setMenuOpen(true);
  };

  return (
    <Menu
      pageWrapId={'MainApp'}
      outerContainerId={'App'}
      styles={styles}
      isOpen={menuOpen}
      onOpen={handleOnOpen}
      onClose={handleOnClose}
    >
      {Links(t).map((link, i) => (
        <NavLink
          key={i}
          active={
            location.pathname + location.hash === link.href ||
            (location.hash === '' &&
              location.pathname === '/' &&
              link.href === '/#introduction')
          }
        >
          <NavHashLink to={link.href} smooth>
            {link.title}
          </NavHashLink>
        </NavLink>
      ))}
      <SelectLanguageWrapper>
        <SelectLanguage />
      </SelectLanguageWrapper>
    </Menu>
  );
}
