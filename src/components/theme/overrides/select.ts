import { Theme, Components } from "@mui/material/styles";

export const Select = (theme: Theme): Components => {
  return {
    MuiSelect: {
      defaultProps: {
        MenuProps: {
          anchorOrigin: { vertical: "bottom", horizontal: "left" },
          transformOrigin: { vertical: "top", horizontal: "left" },
          transitionDuration: { enter: 250, exit: 150 },
          PaperProps: {
            style: {
              maxHeight: "min(400px, 40vh)",
              margin: theme.spacing(0.5, 0),
            },
          },
        },
      },
      styleOverrides: {
        select: {
          "&:focus": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  };
};
