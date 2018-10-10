import calcDispersionHtt from '../utils/calcDispersion.htt';
import calcDispersionMoon from '../utils/calcDispersion.moon';

export default {
  namespace: 'dispersion',
  state: [0, 0],
  reducers: {
    dataChange(state, { payload }) {
      const xs = payload.nodes.map(({ x }) => x);
      const ys = payload.nodes.map(({ y }) => y);

      // 计算离散度
      return [calcDispersionHtt(xs, ys), calcDispersionMoon(xs, ys)];
    },
  },
};
