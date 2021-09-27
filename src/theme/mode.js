import { createContext } from "react";
import red from "@mui/material/colors/red";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });
export const defaultColorMode = "dark";

export const darkMode = {
  primary: {
    main: red["A400"],
  },
};
export const lightMode = {
  primary: {
    main: red["A400"],
  },
};
