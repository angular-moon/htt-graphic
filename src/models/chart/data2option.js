import defaultOption from './defaultOption';

export default data => (option = defaultOption) => {
  const newOption = {
    ...option,
    legend: {
      ...option.legend,
      data: data.nodes.map(node => node.name),
    },
    xAxis: [
      {
        ...option.xAxis[0],
        max: data.maxX,
        min: data.minX,
        interval: data.intervalX,
      },
      {
        ...option.xAxis[1],
        max: data.maxX,
        min: data.minX,
        interval: data.intervalX,
      },
    ],
    yAxis: [
      {
        ...option.yAxis[0],
        max: data.maxY,
        min: data.minY,
        interval: data.intervalY,
      },
      {
        ...option.yAxis[1],
        max: data.maxY,
        min: data.minY,
        interval: data.intervalY,
      },
    ],
    series: [
      {
        ...option.series[0],
        data: data.nodes,
        links: data.links,
        categories: data.nodes,
      },
    ],
  };
  return newOption;
};
