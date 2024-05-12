import { Theme, Components, alpha } from "@mui/material/styles";

export const TextField = (theme: Theme): Components => {
  return {
    MuiInput: {
      defaultProps: {
        disableUnderline: true,
      },
      styleOverrides: {
        root: {
          fontWeight: theme.typography.fontWeightRegular,

          "& .MuiSelect-icon": {
            right: theme.spacing(0.5),
          },
        },
        colorSecondary: {
          backgroundColor: theme.palette.secondary.main,
          borderRadius: theme.shape.borderRadiusSmall,
          transition: theme.transitions.create("background-color", {
            duration: theme.transitions.duration.shortest,
          }),

          "&:hover": {
            backgroundColor: alpha(theme.palette.secondary.main, 0.6),
          },
        },
        input: {
          padding: theme.spacing(0.75, 1.25),
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "standard",
        color: "primary",
      },
    },
  };
};
