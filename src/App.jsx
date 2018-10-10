import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Layout, Button, Row, Col } from 'antd';
import { Provider } from 'react-redux';
import Label from './components/Label';
import Chart from './components/Chart';
import DataPicker from './components/DataPicker';
import ThemePicker from './components/ThemePicker';
import AxisLabelSwitch from './components/AxisLabelSwitch';
import CurvenessTuning from './components/CurvenessTuning';
import Dispersion from './components/Dispersion';
import stateContainer from './utils/stateContainer';
import dataSetModel from './models/dataSet';
import themesModel from './models/themes';
import chartModel from './models/chart';
import dispersionModel from './models/dispersion';

stateContainer.injectModel(dataSetModel);
stateContainer.injectModel(themesModel);
stateContainer.injectModel(chartModel);
stateContainer.injectModel(dispersionModel);

const { Header, Content } = Layout;

/* eslint-disable react/prefer-stateless-function */
class App extends Component {
  render() {
    return (
      <Provider store={stateContainer._store}>
        <Layout style={{ height: '100%' }}>
          <Header>
            <Row gutter={16} align={'middle'} justify={'left'} type={'flex'}>
              <Col span={2}>
                <Label>数据集:</Label>
              </Col>
              <Col span={2}>
                <DataPicker />
              </Col>
              <Col span={2}>
                <Label>主题:</Label>
              </Col>
              <Col span={3}>
                <ThemePicker />
              </Col>
              <Col span={2}>
                <Label>坐标值:</Label>
              </Col>
              <Col span={1}>
                <AxisLabelSwitch />
              </Col>
              <Col span={2}>
                <Label>曲率:</Label>
              </Col>
              <Col span={3}>
                <CurvenessTuning />
              </Col>
              <Col span={7}>
                <Dispersion />
              </Col>
            </Row>
          </Header>
          <Content style={{ height: 'calc(100% - 64px)' }}>
            <Chart />
          </Content>
        </Layout>
      </Provider>
    );
  }
}

export default hot(module)(App);
