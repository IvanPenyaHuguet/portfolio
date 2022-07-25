import { useState, useRef, MouseEvent } from 'react';
import styled from '@emotion/styled';
import { Links } from 'lib/utils/links';
import { useTranslation } from 'react-i18next';
/* import Link from "next/link"; */
import { SelectLanguage } from 'components/Exports';
import LinkWrapper from 'components/navbar/LinkWrapper';
import { Theme } from '@emotion/react';

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

const NavLink = styled.a(({ theme }) => ({
  padding: `${theme.spacings.medium} ${theme.spacings.large}`
}));

type NavIndicatorProps = {
  width?: number;
  left?: number;
  theme?: Theme;
};

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
  const { t, i18n } = useTranslation('common');
  const refActive = useRef({
    width: 0,
    left: 0
  });

  const [indicator, setIndicator] = useState({ width: 0, left: 0 });

  const handleWrapperClick = (e: MouseEvent<HTMLButtonElement>) => {
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
        <LinkWrapper
          key={i}
          onMouseEnter={handleWrapperClick}
          onMouseLeave={handleMouseLeave}
          link={link}
          setIndicator={setIndicator}
          refActive={refActive}
        >
          {/* # HashRouting not working consistently for now
          <Link href={link.href} passHref scroll={false}> */}
          <NavLink href={(i18n.language === 'en' ? 'en' : '') + link.href}>
            {link.title}
          </NavLink>
          {/* </Link> */}
        </LinkWrapper>
      ))}
      <SelectLanguage />
    </Nav>
  );
}
