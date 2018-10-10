// @flow
import React, { Component } from 'react';
import { Select } from 'antd';
import { connect } from 'react-redux';
import chartActions from '../actions/chart';
import dispersionActions from '../actions/dispersion';
import bindActions from '../utils/bindActions';

const { Option } = Select;

type Props = {
  dataSet: Object,
  chartBoundActions: {
    dataChange: Function,
  },
  dispersionBoundActions: {
    dataChange: Function,
  },
};

class DataPicker extends Component<Props> {
  componentDidMount() {
    const { dataSet, chartBoundActions, dispersionBoundActions } = this.props;
    const dataNames = Object.keys(dataSet);
    chartBoundActions.dataChange(dataSet[dataNames[0]]);
    dispersionBoundActions.dataChange(dataSet[dataNames[0]]);
  }

  changeHandler = dataName => {
    const { dataSet, chartBoundActions, dispersionBoundActions } = this.props;
    chartBoundActions.dataChange(dataSet[dataName]);
    dispersionBoundActions.dataChange(dataSet[dataName]);
  };

  render() {
    const { dataSet = {} } = this.props;
    const dataNames = Object.keys(dataSet);
    return (
      <Select defaultValue={dataNames[0]} style={{ width: '100%' }} onChange={this.changeHandler}>
        {dataNames.map(dataName => (
          <Option key={dataName} value={dataName}>
            {dataName}
          </Option>
        ))}
      </Select>
    );
  }
}

const mapStateToProps = ({ dataSet }) => ({ dataSet });

const mapDispatchToProps = bindActions(chartActions, dispersionActions);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataPicker);
