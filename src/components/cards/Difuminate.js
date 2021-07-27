import tw, { styled } from "twin.macro";

const Difuminate = styled.span({
  ...tw``,
  position: "absolute",
  top: "0%",
  left: "0%",
  width: "100%",
  height: "100px",
  zIndex: "30",
  background: "rgb(255,255,255)",
  background:
    "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.850577731092437) 60%, rgba(255,255,255,0) 100%)",
});

export default function DifuminateContainer() {
  return <Difuminate />;
}
