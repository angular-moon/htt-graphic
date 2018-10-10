// @flow
import React, { Component } from 'react';
import { Switch } from 'antd';
import { connect } from 'react-redux';
import chartActions from '../actions/chart';
import bindActions from '../utils/bindActions';

type Props = {
  option: Object,
  chartBoundActions: {
    dataChange: Function,
  },
};

class AxisLabelSwitch extends Component<Props> {
  changeHandler = show => {
    const { chartBoundActions } = this.props;
    chartBoundActions.axisLabelSwitch(show);
  };

  render() {
    const { option } = this.props;
    return <Switch defaultChecked={option.xAxis[0].axisLabel.show} onChange={this.changeHandler} />;
  }
}

const mapStateToProps = ({ chart }) => ({ option: chart.option });

const mapDispatchToProps = bindActions(chartActions);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AxisLabelSwitch);
