import { useState, useEffect, useRef } from "react";
import tw, { styled } from "twin.macro";
import { Links } from "lib/utils/Links";
import { useTranslation } from "next-i18next";
/* import Link from "next/link"; */
import { SelectLanguage } from "components/Exports";
import LinkWrapper from "components/navbar/LinkWrapper";

const Nav = styled.nav({
  ...tw`flex flex-row justify-around items-center relative
    text-xl gap-2 align-bottom whitespace-nowrap
    md:text-base md:gap-1
    mdland:text-base mdland:gap-1
    `,
});

//neon blue: #2bd2ff
const NavLink = styled.a({
  ...tw`px-2 py-3`,
});

const NavIndicator = styled.div(() => [
  tw`absolute h-1 bg-black bottom-1 rounded transition-all duration-500`,
  ({ width = 0 }) => ({
    width: width + "px",
  }),
  ({ left = 0 }) => ({
    left: left + "px",
  }),
]);

export default function NavLinks() {
  const { t } = useTranslation("common");
  const refActive = useRef({
    width: 0,
    left: 0,
  });

  const [indicator, setIndicator] = useState({ width: 0, left: 0 });

  const handleWrapperClick = (e) => {
    setIndicator({
      width: e.target.offsetWidth - 16,
      left: e.target.offsetLeft + 8,
    });
  };

  const handleMouseLeave = (e) => {
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
          <NavLink href={link.href}>{link.title}</NavLink>
          {/* </Link> */}
        </LinkWrapper>
      ))}
      <SelectLanguage />
    </Nav>
  );
}
