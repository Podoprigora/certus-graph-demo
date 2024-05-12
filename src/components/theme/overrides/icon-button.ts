import { Theme, Components, alpha } from "@mui/material/styles";

export const IconButton = (theme: Theme): Components => {
  return {
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          color: theme.palette.text.primary,

          "&:hover": {
            backgroundColor: alpha(theme.palette.secondary.main, 0.6),
          },
        },
      },
    },
  };
};
