"use client";

import { useMemo } from "react";

import _merge from "lodash/merge";
import { ApexOptions } from "apexcharts";
import ApexChart from "react-apexcharts";
import { useTheme } from "@mui/material/styles";

import { ApexChartStyles, renderApexCustomTooltip, useApexChartDefaultOptions } from "~/components/chart";
import { ITopic } from "~/services";
import { Mask } from "~/components/mask";
import { Empty } from "~/components/empty";

//Interfaces
export interface TopTopicsChartProps {
  loading?: boolean;
  items?: ITopic[];
}

//Component
export const TopTopicsChart = (props: TopTopicsChartProps) => {
  const { items, loading } = props;

  const theme = useTheme();
  const apexChartDefaultOptions = useApexChartDefaultOptions();
  const isEmpty = !items || items?.length === 0;

  const series = useMemo(() => {
    if (isEmpty) {
      return [];
    }

    const data = (items || [])?.map((item) => {
      return {
        y: item?.count,
        x: item?.label,
      };
    });

    return [
      {
        data,
      },
    ];
  }, [items, isEmpty]);

  const options = useMemo<ApexOptions>(() => {
    return _merge<ApexOptions, ApexOptions>(apexChartDefaultOptions, {
      colors: [theme.palette.primary.main],
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 0,
      },
      tooltip: {
        custom(opts) {
          return renderApexCustomTooltip(opts);
        },
      },
      xaxis: {
        type: "category",
        axisTicks: {
          show: false,
        },
      },
      yaxis: [
        {
          tickAmount: 4,
          title: {
            text: "Patients",
          },
        },
      ],
    });
  }, [apexChartDefaultOptions, theme]);

  const shouldDisplayEmpty = isEmpty && !loading;
  const shouldDisplayChart = !isEmpty && !loading;

  return (
    <ApexChartStyles>
      <Mask open={!!loading} size="large" />
      {shouldDisplayEmpty && <Empty title centered />}
      {shouldDisplayChart && <ApexChart type="bar" options={options} series={series} height="auto" />}
    </ApexChartStyles>
  );
};
