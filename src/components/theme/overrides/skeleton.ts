import { Theme, Components, alpha } from "@mui/material/styles";

export const Skeleton = (theme: Theme): Components => {
  return {
    MuiSkeleton: {
      defaultProps: {
        animation: "wave",
      },
      styleOverrides: {
        root: {
          backgroundColor: alpha(theme.palette.secondary.main, 0.4),
        },
      },
    },
  };
};
