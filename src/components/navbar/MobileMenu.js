import { pushRotate as Menu } from "react-burger-menu";
import { Links } from "lib/utils/Links";
import { useTranslation } from "next-i18next";
import tw, { styled } from "twin.macro";
import Link from "next/link";

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
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

const NavLink = styled.il({
  ...tw``,
});

export default function MobileMenu() {
  const { t } = useTranslation("common");
  return (
    <Menu pageWrapId={"MainApp"} outerContainerId={"App"} styles={styles}>
      {Links(t).map((link, i) => (
        <Link key={i} href={link.href} passHref>
          <NavLink>{link.title}</NavLink>
        </Link>
      ))}
    </Menu>
  );
}
