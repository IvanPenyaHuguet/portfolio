import { createContext } from "react";

export type ResolutionOptions = 'xs' | 'sm' | 'md' | 'lg';

export const ResponsiveContext = createContext<{
  resolution: ResolutionOptions;
}>({ resolution: 'lg' });
