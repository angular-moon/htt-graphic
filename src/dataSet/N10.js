export default {
  nodes: [
    { name: 'G1', x: 0.2, y: 0.25 },
    { name: 'G2', x: 0.3, y: 0.1 },
    { name: 'G3', x: -0.1, y: -0.5 },
    { name: 'G4', x: 0.35, y: 0.3 },
    { name: 'G5', x: 0.35, y: 0.2 },
    { name: 'G7', x: -0.12, y: -0.6 },
    { name: 'G8', x: 0.25, y: 0.4 },
    { name: 'G9', x: -0.2, y: -0.6 },
    { name: 'G10', x: 0.4, y: 0.38 },
  ],
  links: [
    { source: 'G1', target: 'G2', value: 1 },
    { source: 'G1', target: 'G4', value: 1 },
    { source: 'G1', target: 'G8', value: 1 },
    { source: 'G1', target: 'G10', value: 1 },

    { source: 'G2', target: 'G4', value: 1 },
    { source: 'G2', target: 'G5', value: 1 },
    { source: 'G2', target: 'G8', value: 1 },
    { source: 'G2', target: 'G10', value: 2 },

    { source: 'G3', target: 'G7', value: 2 },
    { source: 'G3', target: 'G9', value: 1 },

    { source: 'G4', target: 'G8', value: 2 },
    { source: 'G4', target: 'G10', value: 2 },

    { source: 'G7', target: 'G9', value: 1 },

    { source: 'G8', target: 'G10', value: 2 },
  ],
};
