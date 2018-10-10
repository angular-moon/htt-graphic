// @flow
import React, { PureComponent } from 'react';
import ReactEcharts from 'echarts-for-react';
import { connect } from 'react-redux';

type Props = {
  option: Object,
  theme: string,
};

function Chart({ option, theme }: Props) {
  return <ReactEcharts option={option} style={{ height: '100%' }} theme={theme} />;
}

const mapStateToProps = ({ chart }) => ({ option: chart.option, theme: chart.theme });

export default connect(mapStateToProps)(Chart);
