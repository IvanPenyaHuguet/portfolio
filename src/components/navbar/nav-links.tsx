import { useState, useRef, MouseEvent } from 'react';
import { NavHashLink } from '@xzar90/react-router-hash-link';
import styled from '@emotion/styled';
import { Links } from 'lib/utils/links';
import { useTranslation } from 'react-i18next';
import { Theme } from '@emotion/react';
import { LinkPosition } from './nav-models';
import { useLocation } from 'react-router-dom';
import LinkWrapper from './link-wrapper';
import { SelectLanguage } from '@components/index';

type NavIndicatorProps = {
  width?: number;
  left?: number;
  theme?: Theme;
};

type NavLinkProps = {
  theme?: Theme;
  active: boolean;
};

const Nav = styled.nav(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  position: 'relative',
  fontSize: theme.fonts.size.xxlarge,
  lineHeight: theme.fonts.line.xxlarge,
  gap: theme.spacings.medium,
  verticalAlign: 'bottom',
  whiteSpace: 'nowrap',
  [theme.media.md]: {
    gap: theme.spacings.small,
    fontSize: theme.fonts.size.large,
    lineHeight: theme.fonts.line.large
  },
  [theme.media.mdland]: {
    gap: theme.spacings.small,
    fontSize: theme.fonts.size.large,
    lineHeight: theme.fonts.line.large
  }
}));

const NavLink = styled.div(({ theme, active }: NavLinkProps) => ({
  padding: `${theme?.spacings.medium ?? 0} ${theme?.spacings.large ?? 0}`,
  color: (active ? 'green' : 'red') + ' !important'
}));

const NavIndicator = styled.div((props: NavIndicatorProps) => ({
  position: 'absolute',
  height: props.theme?.spacings.small,
  background: props.theme?.colors.black,
  bottom: props.theme?.spacings.small,
  borderRadius: props.theme?.borders.radius.medium,
  transitionProperty: 'all',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '500ms',
  width: (props.width ?? 0).toString() + 'px',
  left: (props.left ?? 0).toString() + 'px'
}));

export default function NavLinks() {
  const { t } = useTranslation();
  const location = useLocation();
  const refActive = useRef<LinkPosition>({
    width: 0,
    left: 0
  });

  const [indicator, setIndicator] = useState<LinkPosition>({
    width: 0,
    left: 0
  });

  const handleWrapperClick = (e: MouseEvent<HTMLDivElement>) => {
    setIndicator({
      width: e.currentTarget.offsetWidth - 16,
      left: e.currentTarget.offsetLeft + 8
    });
  };

  const handleMouseLeave = () => {
    setIndicator(refActive.current);
  };

  return (
    <Nav>
      <NavIndicator width={indicator.width} left={indicator.left} />
      {Links(t).map((link, i) => (
        <div
          key={i}
          onMouseEnter={handleWrapperClick}
          onMouseLeave={handleMouseLeave}
        >
          <LinkWrapper
            link={link}
            setIndicator={setIndicator}
            refActive={refActive}
          >
            <NavLink active={location.pathname + location.hash === link.href}>
              <NavHashLink to={link.href} smooth>
                {link.title}
              </NavHashLink>
            </NavLink>
          </LinkWrapper>
        </div>
      ))}
      <SelectLanguage />
    </Nav>
  );
}
