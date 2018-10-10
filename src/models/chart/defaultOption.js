const makeAxis = (
  name,
  nameLocation = 'end',
  showLabel = false,
  nameGap = 25,
  max = 1,
  min = -1,
  interval = 0.2
) => ({
  type: 'value',
  name,
  nameGap,
  nameLocation,
  axisLabel: {
    show: showLabel,
  },
  axisTick: {
    show: false,
  },
  axisLine: {
    symbol: ['none', 'arrow'],
  },
  splitLine: {
    show: false,
  },
  max,
  min,
  interval,
});

export default {
  title: {
    text: '{a|made with} {b|❤} {a|by moon}',
    textStyle: {
      rich: {
        a: {
          fontSize: 18,
          fontWeight: 'bold',
        },
        b: {
          fontSize: 18,
          color: 'deeppink',
        },
      },
    },
    top: 'bottom',
    left: 'right',
  },
  tooltip: {},
  toolbox: {
    feature: {
      // dataView: {},
      saveAsImage: {
        pixelRatio: 2,
      },
    },
  },
  grid: {
    show: false,
    top: 80,
  },
  xAxis: [makeAxis('复杂(complexity)', 'end', true), makeAxis('简洁(simplicity)', 'start')],
  yAxis: [
    makeAxis('饱满(muscular surface)', 'end', true),
    makeAxis('棱角(angular surface)', 'start'),
  ],
  legend: [
    {
      type: 'scroll',
      width: '80%',
      data: null,
    },
  ],
  animationDurationUpdate: 1500,
  animationEasingUpdate: 'quinticInOut',
  series: [
    {
      type: 'graph',
      layout: 'none',
      coordinateSystem: 'cartesian2d',
      data: null,
      links: null,
      categories: null,
      focusNodeAdjacency: true,
      roam: true,
      label: {
        normal: {
          show: true,
          position: 'inside',
          formatter: '{b}',
        },
      },
      lineStyle: {
        normal: {
          color: 'source',
          curveness: 0.2,
          opacity: 0.7,
        },
      },
    },
  ],
};
