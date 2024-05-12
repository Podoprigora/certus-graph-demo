import { Theme, Components } from "@mui/material/styles";

import { CssBaseline } from "./css-base-line";
import { Paper } from "./paper";

export const componentOverrides = (theme: Theme): Components => {
  return Object.assign(CssBaseline(theme), Paper(theme));
};
