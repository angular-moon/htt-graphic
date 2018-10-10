import { createActions } from 'redux-actions';
import { identity } from 'lodash/fp/identity';

export default createActions({
  chart: {
    dataChange: identity,
    themeChange: identity,
    curvenessChange: identity,
    axisLabelSwitch: identity,
  },
});
