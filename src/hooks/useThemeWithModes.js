import { useState, useMemo, useEffect } from "react";
import { createTheme } from "@mui/material/styles";

import { defaultColorMode, darkMode, lightMode } from "theme";

function useThemeWithModes() {
  const [mode, setMode] = useState(
    sessionStorage.getItem("color_mode") || defaultColorMode
  );

  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === "light" ? lightMode : darkMode),
    },
  });

  useEffect(() => {
    sessionStorage.setItem("color_mode", mode);
  }, [mode]);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return {
    theme,
    colorMode,
  };
}

export default useThemeWithModes;
