import { ThemeOption } from "@models/index";
import { createContext } from "react";

export const ThemeContext = createContext<[ThemeOption, (theme: ThemeOption) => void] | null>(null);
