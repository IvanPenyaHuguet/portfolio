import tw, { styled } from "twin.macro";

const DescriptionText = styled.p({
  ...tw`text-black font-text px-4 pb-2 overflow-auto h-full w-full text-justify`,
  textAlign: "justify",
});

export default function DescriptionTextCont({ children }) {
  return <DescriptionText>{children}</DescriptionText>;
}
