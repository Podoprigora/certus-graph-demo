import { useMemo } from "react";

import { styled } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";
import Typography, { TypographyProps } from "@mui/material/Typography";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";

// Interfaces
export interface EmptyProps extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
  title?: string | boolean;
  icon?: React.ReactElement | boolean;
  dense?: boolean;
  centered?: boolean;
  sx?: BoxProps["sx"];
}

interface EmptyStylesProps {
  ownerState?: {
    dense?: EmptyProps["dense"];
    centered?: EmptyProps["centered"];
  };
}

//Styles
export const EmptyIconContainerStyles = styled("div", {
  target: "Empty-iconContainer",
})(({ theme }) => {
  return {
    color: theme.palette.text.secondary,
    lineHeight: 0,
    opacity: 0.6,

    "& .MuiSvgIcon-root": {
      fontSize: theme.typography.pxToRem(48),
    },
  };
});

export const EmptyTitleStyles = styled((props: TypographyProps) => <Typography variant="subtitle2" {...props} />, {
  target: "Empty-title",
})(({ theme }) => {
  return {
    color: theme.palette.text.secondary,
  };
});

export const EmptyStyles = styled(Box, {
  target: "Empty-root",
})<EmptyStylesProps>(({ theme, ownerState }) => {
  const { dense, centered } = ownerState || {};

  return {
    textAlign: "center",
    padding: theme.spacing(dense ? 3 : 5),

    ...(centered && {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }),

    [`${EmptyIconContainerStyles} + ${EmptyTitleStyles}`]: {
      marginTop: theme.spacing(0.5),
    },
  };
});

const defaultTitle = "No data";
const defaultIcon = <InboxOutlinedIcon fontSize="large" />;

//Component
export const Empty = (props: EmptyProps) => {
  const { title, dense, icon, centered, ...other } = props;

  const iconElement = useMemo(() => {
    if (icon) {
      return <EmptyIconContainerStyles>{typeof icon === "boolean" ? defaultIcon : icon}</EmptyIconContainerStyles>;
    }

    return null;
  }, [icon]);

  const titleElement = useMemo(() => {
    if (title) {
      return <EmptyTitleStyles>{typeof title === "boolean" ? defaultTitle : title}</EmptyTitleStyles>;
    }

    return null;
  }, [title]);

  return (
    <EmptyStyles ownerState={{ dense, centered }} {...other}>
      {iconElement}
      {titleElement}
    </EmptyStyles>
  );
};
