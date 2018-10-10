import { compose } from 'redux';
import round from '../../utils/round';

const calcDistance = (point1, point2) => {
  /* eslint-disable  no-mixed-operators */
  const distance = Math.sqrt((point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2);
  // 保留2位小数
  return round(distance);
};

export default data => {
  const nodes = data.nodes.map((node, i) => {
    const s = {};
    s.symbolSize = 25;
    s.x = node.x;
    s.y = node.y;
    s.value = [s.x, s.y];
    s.tooltip = {
      formatter: params => {
        switch (params.dataType) {
          case 'node':
            return `${params.name} : [${params.data.x} , ${params.data.y}]`;
          case 'edge':
            return `${params.name} : ${params.value} , 直线距离: ${params.data.distance}`;
          default:
            return params.name;
        }
      },
    };
    s.category = node.name;
    return { ...node, ...s };
  });

  const links = data.links.map(link => {
    const lineStyle = {
      width: link.value,
    };

    const sourceNode = nodes.find(({ name }) => name === link.source);
    const targetNode = nodes.find(({ name }) => name === link.target);
    // 计算2点之间的距离
    const distance = calcDistance(sourceNode, targetNode);

    return { ...link, lineStyle, distance };
  });

  const max = compose(
    Math.ceil,
    Math.max
  );
  const min = compose(
    Math.floor,
    Math.min
  );

  const xs = nodes.map(({ x }) => x);
  const ys = nodes.map(({ y }) => y);

  // 计算坐标刻度
  const maxX = max(...xs);
  const minX = min(...xs);
  const absMaxX = max(Math.abs(maxX), Math.abs(minX));
  const intervalX = round((absMaxX * 2) / 10);

  const maxY = max(...ys);
  const minY = min(...ys);
  const absMaxY = max(Math.abs(maxY), Math.abs(minY));
  const intervalY = round((absMaxY * 2) / 10);

  return {
    nodes,
    links,
    maxX: absMaxX,
    minX: -absMaxX,
    intervalX,
    maxY: absMaxX,
    minY: -absMaxX,
    intervalY,
  };
};
