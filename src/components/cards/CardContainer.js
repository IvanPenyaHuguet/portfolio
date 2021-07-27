import { useState } from "react";
import tw, { styled, theme } from "twin.macro";

import { useResponsiveContext } from "hooks/HookExports";

import { Difuminate, ScoreBar } from "components/Exports";

const Container = styled.div(({ color, content }) => ({
  ...tw`border-4 relative rounded border-solid shadow-lg w-full h-full overflow-hidden
  flex justify-center items-center bg-white`,
  borderColor: color,
  "&:before": {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: color,
    clipPath: "circle(0px at 100% 0%)",
    transition: "0.6s ease-in-out",
    zIndex: "40",
  },
  "&:hover:before": {
    clipPath: "circle(150px at 90% -20%)",
  },
  "&:after": {
    content: content,
    position: "absolute",
    top: "70%",
    left: "50%",
    color: "rgba(0,0,0,0.1)",
    fontSize: "4rem",
    fontWeight: "800",
    fontStyle: "italic",
    transition: "color 1s",
    transform: "translateX(-50%)",
  },
  "&:hover:after": {
    color: "rgba(0,0,0,0)",
  },
  "&:hover > div": {
    top: "45px",
    left: "50%",
    fill: "rgb(0,0,0)",
  },
  "&:hover > div span": {
    display: "none",
  },
  "& > div svg": {
    transition: "fill 1s",
    fill: color,
  },
  "&:hover > div svg": {
    fill: "rgba(0,0,0,0)",
  },
}));

export default function CardContainer({ children, score, color, bgtext }) {
  const deviceSize = useResponsiveContext();
  const [mouseHover, setMouseHover] = useState(false);

  const handleMouseOut = (e) => {
    setMouseHover(false);
  };
  const handleMouseOver = (e) => {
    setMouseHover(true);
  };

  return (
    <Container
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
      color={color}
      content={bgtext}
    >
      <Difuminate />
      {!mouseHover && <ScoreBar color={color} score={score} />}
      {children(mouseHover)}
    </Container>
  );
}
