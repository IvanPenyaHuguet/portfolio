import tw, { styled } from "twin.macro";
import { NavLinks, MobileMenu } from "components/Exports";
import { useResponsiveContext } from "hooks/HookExports";
import { useTranslation } from "next-i18next";

const Header = styled.header({
  ...tw`fixed w-screen shadow-md h-16 bg-gray-300 bg-opacity-10 px-2 z-50 font-title
  backdrop-filter backdrop-blur-sm
  `,
});
const HeaderContainer = styled.div({
  ...tw`w-10/12 md:w-11/12 flex flex-row justify-between items-center h-16 mx-auto`,
});

const Title = styled.h1({
  ...tw`text-4xl font-semibold`,
});

export default function NavBar() {
  const deviceSize = useResponsiveContext();
  const { t } = useTranslation("common");

  return (
    <>
      {deviceSize === "lg" || deviceSize === "md" ? (
        <Header id="header">
          <HeaderContainer>
            <Title>{t("navbar.nav.title")}</Title>
            <NavLinks />
          </HeaderContainer>
        </Header>
      ) : (
        <MobileMenu />
      )}
    </>
  );
}
