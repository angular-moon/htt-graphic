// @flow
import React, { Component } from 'react';
import { Slider } from 'antd';
import { connect } from 'react-redux';
import chartActions from '../actions/chart';
import bindActions from '../utils/bindActions';

type Props = {
  option: Object,
  chartBoundActions: {
    curvenessChange: Function,
  },
};

class CurvenessTuning extends Component<Props> {
  changeHandler = curveness => {
    const { chartBoundActions } = this.props;
    chartBoundActions.curvenessChange(curveness);
  };

  render() {
    const { option } = this.props;
    return (
      <Slider
        defaultValue={option.series[0].lineStyle.normal.curveness}
        min={0}
        max={1}
        step={0.01}
        onChange={this.changeHandler}
      />
    );
  }
}

const mapStateToProps = ({ chart }) => ({ option: chart.option });

const mapDispatchToProps = bindActions(chartActions);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurvenessTuning);
