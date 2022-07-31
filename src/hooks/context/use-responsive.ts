import { useContext } from "react";
import { ResponsiveContext } from "@contexts/index";

export default function useResponsive() {
  const { resolution } = useContext(ResponsiveContext);
  return resolution;
}
