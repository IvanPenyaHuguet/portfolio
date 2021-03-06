import { useState, useEffect } from "react";
import { isServer, isClient } from "lib/utils/Common";
import { breakpoints } from "../../design.config";

const getScreenResolution = () => {
  if (isServer) return "lg";
  if (window.innerWidth < breakpoints.xs.max) return "xs";
  else if (
    window.innerWidth >= breakpoints.xs.max &&
    window.innerWidth < breakpoints.sm.max
  )
    return "sm";
  else if (
    window.innerWidth >= breakpoints.sm.max &&
    window.innerWidth < breakpoints.md.max
  )
    return "md";
  else if (window.innerWidth >= breakpoints.md.max) return "lg";
};

const useScreenSize = () => {
  const currentResolution = getScreenResolution();

  const [resolution, setResolution] = useState(currentResolution);

  useEffect(() => {
    const handleResize = () => {
      if (isClient) {
        setResolution(getScreenResolution());
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return resolution;
};

export default useScreenSize;
