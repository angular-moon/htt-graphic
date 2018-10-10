export default {
  nodes: [
    { name: 'G1', x: 0.65, y: 0.4 },
    { name: 'G2', x: -0.1, y: -0.1 },
    { name: 'G3', x: 0.2, y: -0.2 },
    { name: 'G4', x: 0.32, y: 0.15 },
    { name: 'G5', x: 0.55, y: 0.1 },
    { name: 'G6', x: 0.45, y: 0.1 },
    { name: 'G7', x: 0.3, y: 0.6 },
    { name: 'G8', x: 0.34, y: 0.45 },
    { name: 'G9', x: -0.15, y: 0.4 },
  ],
  links: [
    { source: 'G1', target: 'G2', value: 1 },
    { source: 'G1', target: 'G3', value: 1 },
    { source: 'G1', target: 'G5', value: 1 },

    { source: 'G2', target: 'G3', value: 2 },
    { source: 'G2', target: 'G4', value: 1 },

    { source: 'G3', target: 'G4', value: 1 },
    { source: 'G3', target: 'G5', value: 1 },
    { source: 'G3', target: 'G7', value: 1 },

    { source: 'G4', target: 'G7', value: 1 },

    { source: 'G5', target: 'G6', value: 1 },

    { source: 'G6', target: 'G8', value: 1 },

    { source: 'G7', target: 'G8', value: 1 },
    { source: 'G7', target: 'G9', value: 1 },

    { source: 'G8', target: 'G9', value: 1 },
  ],
};
