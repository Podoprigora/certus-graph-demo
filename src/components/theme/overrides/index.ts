import { Theme, Components } from "@mui/material/styles";

import { CssBaseline } from "./css-base-line";
import { Paper } from "./paper";
import { Select } from "./select";
import { TextField } from "./text-field";
import { IconButton } from "./icon-button";
import { Skeleton } from "./skeleton";

export const componentOverrides = (theme: Theme): Components => {
  return Object.assign(
    CssBaseline(theme),
    Paper(theme),
    TextField(theme),
    Select(theme),
    IconButton(theme),
    Skeleton(theme)
  );
};
