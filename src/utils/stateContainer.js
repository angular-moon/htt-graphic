/*eslint-disable*/
import { create } from 'dva-core';
import createHistory from 'history/createBrowserHistory';

/**
 * initialReducer, redux-middleware, dva-plugin etc. in this configuration
 * @see https://github.com/dvajs/dva/blob/master/packages/dva-core/src/index.js
 */
// add history middleware
export const history = createHistory();

// GM20171202 add createLoading @2018/04/13
const stateContainer = create();

// model namespace cache
const cached = {};

let hotReloadNeedReplaceModel = false;
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.addStatusHandler(() => {
    hotReloadNeedReplaceModel = true;
  });
}

/**
 * dynamic inject dva model to stateContainer
 * @param {Object} model dva model
 * @param {boolean} [replace=false] if true, same namespace model will be replaced
 */
stateContainer.injectModel = (model, replace = false) => {
  const m = Object.assign({}, model.default || model);
  if (cached[m.namespace]) {
    // hot reload need replace reducer, force replace
    if (replace || hotReloadNeedReplaceModel) {
      hotReloadNeedReplaceModel = false;
      stateContainer.unmodel(m.namespace);
    } else {
      return m;
    }
  }
  stateContainer.model(m);
  cached[m.namespace] = 1;
  return m;
};

/**
 * if need
 * you can add model (use stateContainer.model function) before stateContainer start
 */
stateContainer.start();

export default stateContainer;
