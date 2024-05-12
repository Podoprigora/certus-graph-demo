"use client";

import { ApexOptions } from "apexcharts";
import { useTheme } from "@mui/material/styles";

export const useApexChartDefaultOptions = (): ApexOptions => {
  const theme = useTheme();

  const baseConfig: ApexOptions = {
    // colors: theme.palette.chartDefaultColors,

    theme: {
      mode: "light",
    },

    chart: {
      fontFamily: theme.typography.fontFamily,
      toolbar: {
        show: false,
        autoSelected: "pan",
        tools: {
          download: false,
        },
      },
      animations: {
        enabled: false,
        easing: "linear",
        dynamicAnimation: {
          speed: 600,
        },
      },
    },

    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
      padding: {
        top: 0,
        bottom: 0,
        left: 4,
        right: 4,
      },
    },

    states: {
      active: {
        filter: {
          type: "none",
        },
      },
    },

    dataLabels: {
      enabled: false,
      style: {
        fontSize: theme.typography.pxToRem(14),
        fontWeight: theme.typography.fontWeightMedium,
      },
      dropShadow: {
        enabled: false,
      },
    },

    tooltip: {
      style: {
        fontSize: "",
      },
      fillSeriesColor: false,
    },

    legend: {
      show: true,
      showForSingleSeries: true,
      fontSize: "14px",
      position: "top",
      offsetY: 0,
      markers: {
        width: 16,
        height: 16,
        radius: 16,
        offsetX: -8,
      },
      labels: {
        colors: theme.palette.text.primary,
      },
      itemMargin: {
        vertical: 4,
        horizontal: 10,
      },
    },

    xaxis: {
      axisBorder: {
        show: true,
        color: "#000",
        // @ts-ignore
        height: 4,
      },
      axisTicks: {
        show: true,
        color: "#000",
      },
      labels: {
        style: {
          fontSize: theme.typography.pxToRem(12),
          fontWeight: theme.typography.fontWeightRegular,
        },
        trim: true,
        offsetY: 5,
      },
    },

    yaxis: [
      {
        title: {
          style: {
            fontFamily: theme.typography.fontFamily,
            fontSize: theme.typography.pxToRem(14),
            color: theme.palette.text.primary,
            fontWeight: theme.typography.fontWeightBold,
          },
          offsetX: -5,
        },
        axisBorder: {
          show: true,
          width: 4,
          color: "#000",
        },
        axisTicks: {
          show: true,
          color: "#000",
        },
        labels: {
          style: {
            fontSize: theme.typography.pxToRem(14),
            fontWeight: theme.typography.fontWeightBold,
          },
        },
      },
    ],

    plotOptions: {
      bar: {
        columnWidth: "50%",
      },
    },
  };

  return structuredClone(baseConfig);
};
