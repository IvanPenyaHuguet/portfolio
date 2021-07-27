import tw, { styled, css, theme } from "twin.macro";

const Bar = styled.ul({
  ...tw`flex flex-row absolute`,
  top: "20%",
});

const BarFragment = styled.li({
  ...tw`border-2 border-solid border-black bg-transparent w-8 h-8 z-10`,
  boxShadow:
    "inset 0px 0px 0px 1px rgba(255,255,255,0.7), 2px 2px 4px 1px rgba(0,0,0,0.4)",
});

const FirstBarFragment = styled.li({
  ...tw`border-2 border-solid rounded-l border-black bg-transparent w-8 h-8 z-10`,
  boxShadow:
    "inset 0px 0px 0px 1px rgba(255,255,255,0.7), 2px 2px 4px 1px rgba(0,0,0,0.4)",
});

const LastBarFragment = styled.li({
  ...tw`border-2 border-solid rounded-r border-black bg-transparent w-8 h-8 z-10`,
  boxShadow:
    "inset 0px 0px 0px 1px rgba(255,255,255,0.7), 2px 2px 4px 1px rgba(0,0,0,0.4)",
});

const MovibleBar = styled.li(() => [
  tw`h-8 absolute w-3/5 rounded filter blur brightness-200`,
  ({ color, score }) => ({
    backgroundColor: color,
    width: score + "%",
  }),
]);

export default function ScoreBar({ color = "white", score = 0 }) {
  return (
    <Bar>
      <MovibleBar color={color} score={score * 20} />
      <FirstBarFragment />
      <BarFragment />
      <BarFragment />
      <BarFragment />
      <LastBarFragment />
    </Bar>
  );
}
