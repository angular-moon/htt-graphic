import defaultOption from './defaultOption';
import dataProcess from './dataProcess';
import data2option from './data2option';

export default {
  namespace: 'chart',
  state: { option: defaultOption, theme: 'default' },
  reducers: {
    dataChange(state, { payload }) {
      const option = data2option(dataProcess(payload))(state.option);
      return { ...state, option };
    },
    themeChange(state, { payload }) {
      return { ...state, theme: payload };
    },
    axisLabelSwitch(state, { payload }) {
      const option = {
        ...state.option,
        xAxis: state.option.xAxis.map((xAxis, index) => ({
          ...xAxis,
          axisLabel: {
            ...xAxis.axisLabel,
            show: index === 0 && payload,
          },
        })),
        yAxis: state.option.yAxis.map((yAxis, index) => ({
          ...yAxis,
          axisLabel: {
            ...yAxis.axisLabel,
            show: index === 0 && payload,
          },
        })),
      };
      return { ...state, option };
    },
    curvenessChange(state, { payload }) {
      const option = {
        ...state.option,
        series: [
          {
            ...state.option.series[0],
            lineStyle: {
              ...state.option.series[0].lineStyle,
              normal: {
                ...state.option.series[0].lineStyle.normal,
                curveness: payload,
              },
            },
          },
        ],
      };
      return { ...state, option };
    },
  },
};
