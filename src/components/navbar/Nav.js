import tw, { styled } from "twin.macro";
import { NavLinks, MobileMenu } from "components/Exports";
import { useResponsiveContext } from "hooks/HookExports";

const Header = styled.header({
  ...tw`fixed w-screen flex flex-row shadow-md justify-between items-center h-16 bg-gray-300 bg-opacity-25 p-2`,
});

const Title = styled.h1({
  ...tw`text-xl`,
});

export default function NavBar() {
  const deviceSize = useResponsiveContext();

  return (
    <>
      {deviceSize === "lg" || deviceSize === "md" ? (
        <Header id="header">
          <Title>Iván Peña Huguet</Title>
          <NavLinks />
        </Header>
      ) : (
        <MobileMenu />
      )}
    </>
  );
}
