import { Typography } from "@mui/material/styles/createTypography";

import { Inter } from "next/font/google";

const interFonts = Inter({
  weight: ["500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const pxToRem = (value: number): string => {
  return `${value / 10}rem`;
};

const fontWeightRegular = 500;
const fontWeightBold = 700;

export const typography: Partial<Typography> = {
  fontFamily: [interFonts.style.fontFamily, "Arial", "sans-serif"].join(","),
  htmlFontSize: 10,
  fontSize: 14,
  fontWeightRegular,
  fontWeightBold,
  pxToRem,

  subtitle1: {
    fontSize: pxToRem(18),
    fontWeight: fontWeightBold,
    lineHeight: 1.3,
  },
  subtitle2: {
    fontSize: pxToRem(14),
    fontWeight: fontWeightRegular,
    lineHeight: 1.3,
  },
  body1: {
    fontSize: pxToRem(14),
    lineHeight: 1.4,
  },
};
