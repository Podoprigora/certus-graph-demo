"use client";

import { ThemeProvider as MuiThemeProvider, createTheme, Theme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { componentOverrides } from "./overrides";
import { typography } from "./typography";
import { palette } from "./palette";
import { shape } from "./shape";

export interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;

  const theme = createTheme({
    typography,
    palette,
    shape,
  });
  theme.components = componentOverrides(theme as Theme);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
