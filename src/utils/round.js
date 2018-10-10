/**
 * 四舍五入, 保留 digit 为小数
 */
export default (number, digit = 2) => {
  const t = 10 ** digit;
  return Math.round(number * t) / t;
};
