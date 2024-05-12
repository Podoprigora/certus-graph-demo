import { Components, Theme } from "@mui/material/styles";

export const Paper = (theme: Theme): Components => {
  return {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
  };
};
