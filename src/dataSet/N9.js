export default {
  nodes: [
    { name: 'G1', x: -0.1, y: 0.1 },
    { name: 'G2', x: -0.2, y: 0.05 },
    { name: 'G3', x: 0.3, y: 0.2 },
    { name: 'G4', x: -0.33, y: -0.1 },
    { name: 'G5', x: 0.25, y: 0.1 },
    { name: 'G6', x: 0.15, y: -0.3 },
    { name: 'G7', x: 0.35, y: -0.35 },
    { name: 'G8', x: 0.3, y: -0.4 },
  ],
  links: [
    { source: 'G1', target: 'G2', value: 1 },
    { source: 'G1', target: 'G3', value: 2 },
    { source: 'G1', target: 'G6', value: 1 },

    { source: 'G2', target: 'G3', value: 1 },
    { source: 'G2', target: 'G6', value: 1 },

    { source: 'G3', target: 'G6', value: 1 },

    { source: 'G5', target: 'G7', value: 1 },
  ],
};
