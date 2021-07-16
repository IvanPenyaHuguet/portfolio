import tw, { styled } from "twin.macro";
import { Links } from "lib/utils/Links";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const Nav = styled.nav({
  ...tw`flex flex-row justify-around items-center gap-4`,
});

const NavLink = styled.a({
  ...tw``,
});

export default function NavLinks() {
  const { t } = useTranslation("common");
  return (
    <Nav>
      {Links(t).map((link, i) => (
        <Link key={i} href={link.href} passHref>
          <NavLink>{link.title}</NavLink>
        </Link>
      ))}
    </Nav>
  );
}
