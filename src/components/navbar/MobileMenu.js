/* import { fallDown as Menu } from "react-burger-menu"; */
import Menu from "react-burger-menu/lib/menus/slide";
import { useState } from "react";
import { Links } from "lib/utils/Links";
import { useTranslation } from "next-i18next";
import { SelectLanguage } from "components/Exports";
import { useRouter } from "next/router";
import tw, { styled } from "twin.macro";

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#2bd2ff",
    padding: "1rem 0.8rem",
    fontFamily: "Libre Franklin",
  },
  bmItem: {
    display: "block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

const NavLink = styled.a({
  ...tw``,
  fontSize: "1.75rem",
  lineHeight: "3rem",
});
const SelectLanguageWrapper = styled.div({
  ...tw`text-base text-gray-600 pt-8`,
});

export default function MobileMenu() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (event) => {};

  return (
    <Menu
      pageWrapId={"MainApp"}
      outerContainerId={"App"}
      styles={styles}
      isOpen={menuOpen}
    >
      {Links(t).map((link, i) => (
        <NavLink
          key={i}
          href={link.href}
          onClick={handleLinkClick}
          className={
            router.asPath === link.href ||
            (router.asPath === "/" && link.href === "/#introduction")
              ? "linkactive"
              : ""
          }
        >
          {link.title}
        </NavLink>
      ))}
      <SelectLanguageWrapper>
        <SelectLanguage optionsSize={20} />
      </SelectLanguageWrapper>
    </Menu>
  );
}
