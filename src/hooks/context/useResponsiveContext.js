import { useContext } from "react";
import { ResponsiveContext } from "contexts/ResponsiveContext";

export default function useResponsiveContext() {
  const { resolution } = useContext(ResponsiveContext);
  return resolution;
}
