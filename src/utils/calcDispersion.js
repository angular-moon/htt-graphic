/* eslint-disable no-mixed-operators */
import { zip } from 'lodash';
import round from './round';

// 平均值
const calcAverage = array => {
  const total = array.reduce((previous, current) => previous + current, 0);
  return total / array.length;
};

export default (xs, ys) => {
  // 重心
  const x0 = calcAverage(xs);
  const y0 = calcAverage(ys);
  // 每个点距离重心的平方
  const ls = zip(xs, ys).map(([x, y]) => (x - x0) ** 2 + (y - y0) ** 2);
  // 标准差
  const dispersion = Math.sqrt(calcAverage(ls));
  return round(dispersion);
};
