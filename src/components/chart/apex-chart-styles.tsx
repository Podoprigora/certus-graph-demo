import { styled } from "@mui/material/styles";

//Interfaces
export interface ApexChartStylesProps extends React.ComponentPropsWithoutRef<"div"> {}

//Styles
export const ApexChartStyles = styled("div", {
  target: "ApexChart-root",
})(({ theme }) => {
  return {
    position: "relative",
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "stretch",
    alignItems: "stretch",
    minHeight: 220,
    width: "100%",
    height: "100%",

    "& > div:not(.apexcharts-tooltip-wrap):not(.ApexChartLegend-root)": {
      flex: 1,
    },

    "& .apexcharts-legend": {},

    "& .apexcharts-tooltip": {
      boxShadow: theme.shadows[1],
      border: 0,
      borderRadius: theme.shape.borderRadius,
      padding: theme.spacing(1, 0),

      "& .apexchart-tooltip-custom": {
        display: "flex",
        flexFlow: "row nowrap",
        padding: theme.spacing(0, 2),

        "& .apexchart-tooltip-custom__value": {
          fontWeight: theme.typography.fontWeightBold,
          paddingLeft: theme.spacing(0.5),
        },
      },

      "&.apexcharts-theme-light, &.apexcharts-theme-dark": {
        border: 0,
        backgroundColor: "#fff",
        color: theme.palette.text.primary,

        "& .apexcharts-tooltip-title": {
          background: "inherit",
          borderBottom: 0,
        },
      },

      "& .apexcharts-tooltip-title": {
        ...theme.typography.h6,
        padding: theme.spacing(1, 2, 0.5, 2),
        margin: 0,
      },

      "& .apexcharts-tooltip-series-group.apexcharts-active": {
        padding: theme.spacing(0, 2),
      },
    },
  };
});
