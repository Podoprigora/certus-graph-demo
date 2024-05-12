import { styled } from "@mui/material/styles";
import Typography, { TypographyProps } from "@mui/material/Typography";

// Interfaces
export interface SelectPlaceholderProps extends TypographyProps {}

//Styles
export const SelectPlaceholderStyles = styled((props) => <Typography noWrap {...props} />)(({ theme }) => {
  return {
    position: "absolute",
    top: "50%",
    width: "calc(100% - 48px)",
    transform: "translateY(-50%)",
    color: theme.palette.text.secondary,
    lineHeight: 1.4,
    fontWeight: theme.typography.fontWeightRegular,
  };
});

//Component
export const SelectPlaceholder = (props: SelectPlaceholderProps) => {
  return <SelectPlaceholderStyles {...props} />;
};
