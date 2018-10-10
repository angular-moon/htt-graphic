// .easy-mock.js
module.exports = {
  host: 'http://192.168.2.11:7300',
  output: 'src/api', // 产出到项目下的 api 目录，不用手动创建
  template: 'angular-moon/axios',
  projects: [
    {
      id: '5b45d08b36ad524cd07d91de', // easy-mock project id http://192.168.2.11:7300/project/5b45d08b36ad524cd07d91de
      name: 'xcjOrgApi',
      // urlPreprocessor: url => url.replace('/xcj-gateway', ''),
      baseUrl: 'process.env.REACT_APP_ORG_API_GATEWAY_BASE', // 如果baseUrl为字符串请使用 "'baseUrl'"
    },
  ],
};
