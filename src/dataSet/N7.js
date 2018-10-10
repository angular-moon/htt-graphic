export default {
  nodes: [
    { name: 'G1', x: 0.35, y: 0.2 },
    { name: 'G2', x: 0.2, y: 0.4 },
    { name: 'G3', x: 0.3, y: 0.25 },
    { name: 'G4', x: -0.2, y: 0.3 },
    { name: 'G5', x: 0.2, y: 0.1 },
  ],
  links: [
    { source: 'G1', target: 'G3', value: 1 },

    { source: 'G2', target: 'G4', value: 2 },
    { source: 'G2', target: 'G5', value: 1 },

    { source: 'G4', target: 'G5', value: 2 },
  ],
};
