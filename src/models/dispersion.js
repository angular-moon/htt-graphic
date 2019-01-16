import calcDispersion from '../utils/calcDispersion';

export default {
  namespace: 'dispersion',
  state: 0,
  reducers: {
    dataChange(state, { payload }) {
      const xs = payload.nodes.map(({ x }) => x);
      const ys = payload.nodes.map(({ y }) => y);

      console.log(calcDispersion(xs, ys));
      // 计算离散度
      return calcDispersion(xs, ys);
    },
  },
};
