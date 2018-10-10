import echarts from 'echarts';
import chalk from './chalk.json';
import dark from './dark.json';
import essos from './essos.json';
import halloween from './halloween.json';
import infographic from './infographic.json';
import macarons from './macarons.json';
import purplePassion from './purplePassion.json';
import roma from './roma.json';
import shine from './shine.json';
import vintage from './vintage.json';
import walden from './walden.json';
import westeros from './westeros.json';
import wonderland from './wonderland.json';

const themes = {
  default: {},
  chalk,
  dark,
  essos,
  halloween,
  infographic,
  macarons,
  purplePassion,
  roma,
  shine,
  vintage,
  walden,
  westeros,
  wonderland,
};

Object.keys(themes).map(themeName => echarts.registerTheme(themeName, themes[themeName]));

export default themes;
