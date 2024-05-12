import { useMemo } from "react";

import { styled } from "@mui/material/styles";
import Backdrop, { BackdropProps } from "@mui/material/Backdrop";
import Typography, { TypographyProps } from "@mui/material/Typography";
import CircularProgress, { CircularProgressProps } from "@mui/material/CircularProgress";

//Interfaces
export interface MaskProps extends BackdropProps {
  title?: string;
  disableProgress?: boolean;
  size?: "large" | "medium";
  ProgressProps?: CircularProgressProps;
}

//Styles
export const MaskTitleStyles = styled((props: TypographyProps) => <Typography variant="subtitle1" noWrap {...props} />)(
  ({ theme }) => {
    return {
      marginTop: theme.spacing(3),
      color: theme.palette.primary.main,
    };
  }
);

export const MaskStyles = styled((props: BackdropProps) => <Backdrop appear unmountOnExit {...props} />)(
  ({ theme }) => {
    return {
      position: "absolute",
      display: "flex",
      flexFlow: "column nowrap",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: `rgba(255,255,255, .6)`,
      zIndex: theme.zIndex.drawer + 1,
    };
  }
);

//Component
export const Mask = (props: MaskProps) => {
  const { open, title, disableProgress, size = "medium", ProgressProps, ...other } = props;

  const progressProps = useMemo<Partial<CircularProgressProps>>(() => {
    if (size === "large") {
      return {
        size: 50,
        thickness: 2.6,
        ...ProgressProps,
      };
    }

    return {
      size: 36,
      thickness: 3,
      ...ProgressProps,
    };
  }, [size, ProgressProps]);

  return (
    <MaskStyles open={open} {...other}>
      {!disableProgress && <CircularProgress color="primary" {...progressProps} />}
      {title && <MaskTitleStyles>{title}</MaskTitleStyles>}
    </MaskStyles>
  );
};
