import tw, { styled } from "twin.macro";

const LogoTitle = styled.span({
  ...tw`text-black transition-all duration-1000 ease-out font-title mt-4 text-2xl font-semibold`,
  textShadow: "0 2px 4px rgba(0,0,0,0.40)",
});

export default function LogoTitleCont({ children }) {
  return <LogoTitle>{children}</LogoTitle>;
}
