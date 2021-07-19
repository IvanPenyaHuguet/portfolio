import tw, { styled } from "twin.macro";

const Wrapper = styled.div({
  ...tw`relative`,
  "&:hover span:first-child": {
    visibility: "visible",
  },
});

const TooltipText = styled.span({
  ...tw`bg-black text-white text-center p-2 rounded-full absolute top-full left-1/2`,
  visibility: "hidden",
  zIndex: 100,
  width: "120px",
  marginLeft: "-60px",
});

export default function Tooltip({ text, children }) {
  return (
    <Wrapper>
      <TooltipText>{text}</TooltipText>
      {children}
    </Wrapper>
  );
}
