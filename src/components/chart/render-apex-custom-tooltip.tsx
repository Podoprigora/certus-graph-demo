export const renderApexCustomTooltip = (opts: any) => {
  const dataIndex = opts?.dataPointIndex;
  const seriesIndex = opts?.seriesIndex;
  const data = opts?.w?.config?.series?.at(seriesIndex)?.data || [];
  const item = data?.at(dataIndex);
  const label = item?.x;
  const value = item?.y;

  return `
    <div class="apexchart-tooltip-custom">
      ${label}: <span class="apexchart-tooltip-custom__value">${value}</span>
    </div>
  `;
};
