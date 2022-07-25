const breakpoints = {
  xs: {
    min: 0,
    max: 449,
  },
  sm: {
    min: 450,
    max: 799,
  },
  md: {
    min: 800,
    max: 1199,
  },
  lg: {
    min: 1200,
    max: 1800,
  },
};

const media = {
  xs: `@media (min-width: ${breakpoints.xs.min}px) and (max-width: ${breakpoints.xs.max}px)`,
  sm: `@media (min-width: ${breakpoints.sm.min}px) and (max-width: ${breakpoints.sm.max}px)`,
  md: `@media (min-width: ${breakpoints.md.min}px) and (max-width: ${breakpoints.md.max}px)`,
  lg: `@media (min-width: ${breakpoints.lg.min}px) and (max-width: ${breakpoints.lg.max}px)`,
  mobile: `@media (max-width: ${breakpoints.sm.max}px)`,
  tablet: `@media (max-width: ${breakpoints.md.max}px)`,
  mdland: `(orientation: landscape) and (min-width:${breakpoints.md.min}px) and (max-width:${breakpoints.md.max}px) and (max-height: 500px)`,
  smland: `(orientation: landscape) and (min-width:${breakpoints.sm.min}px) and (max-width:${breakpoints.sm.max}) and (max-height: 400px)`
}

export { breakpoints, media };
