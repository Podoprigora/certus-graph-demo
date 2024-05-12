import { Palette } from "@mui/material/styles";

export const palette: Partial<Palette> = {
  primary: {
    main: "#7C6E89",
    dark: "#2E2D4D",
    light: "#7C6E89",
    contrastText: "#fff",
  },
  secondary: {
    main: "#FFE6F3",
    dark: "#FFE6F3",
    light: "#FFF7FB",
    contrastText: "#000",
  },
  text: {
    primary: "#000",
    secondary: "#7C6E89",
    disabled: "rgba(0,0,0, .38)",
  },
  background: {
    default: "#FFF7FB",
    paper: "#fff",
  },
  action: {
    active: "#000",
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    disabled: "rgba(0, 0, 0, 0.26)",
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
};
