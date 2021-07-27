import tw, { styled } from "twin.macro";

const LogoContainer = styled.div({
  ...tw`flex flex-col justify-center items-center z-40`,
  transition: "all 1s",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translateX(-50%) translateY(-50%)",
});

export default function LogoContainerCont({ children }) {
  return <LogoContainer>{children}</LogoContainer>;
}
