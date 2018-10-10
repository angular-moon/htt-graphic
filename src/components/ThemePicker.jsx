// @flow
import React, { Component } from 'react';
import { Select } from 'antd';
import { connect } from 'react-redux';
import stateContainer from '../utils/stateContainer';
import chartActions from '../actions/chart';
import bindActions from '../utils/bindActions';

const { Option } = Select;

type Props = {
  themes: Object,
  chartBoundActions: {
    themeChange: Function,
  },
};

class ThemePicker extends Component<Props> {
  componentDidMount() {
    const { themes, chartBoundActions } = this.props;
    const themeNames = Object.keys(themes);
    chartBoundActions.themeChange(themeNames[0]);
  }

  changeHandler = themeName => {
    const { chartBoundActions } = this.props;
    chartBoundActions.themeChange(themeName);
  };

  render() {
    const { themes = {} } = this.props;
    const themeNames = Object.keys(themes);
    return (
      <Select defaultValue={themeNames[0]} style={{ width: '100%' }} onChange={this.changeHandler}>
        {themeNames.map(themeName => (
          <Option key={themeName} value={themeName}>
            {themeName}
          </Option>
        ))}
      </Select>
    );
  }
}

const mapStateToProps = ({ themes }) => ({ themes });

const mapDispatchToProps = bindActions(chartActions);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemePicker);
