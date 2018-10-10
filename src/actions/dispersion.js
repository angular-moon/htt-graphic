import { createActions } from 'redux-actions';
import { identity } from 'lodash/fp/identity';

export default createActions({
  dispersion: {
    dataChange: identity,
  },
});
