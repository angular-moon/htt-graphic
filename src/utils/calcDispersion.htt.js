/* eslint-disable no-mixed-operators */
import { zip } from 'lodash';
import round from './round';

const calcAverage = array => {
  const total = array.reduce((previous, current) => previous + current, 0);
  return total / array.length;
};

export default (xs, ys) => {
  const x0 = calcAverage(xs);
  const y0 = calcAverage(ys);

  const ls = zip(xs, ys).map(([x, y]) => Math.sqrt((x - x0) ** 2 + (y - y0) ** 2));
  const l0 = calcAverage(ls);

  const dispersion = Math.sqrt(calcAverage(ls.map(l => (l - l0) ** 2)));
  return round(dispersion);
};
