export default {
  nodes: [
    { name: 'G1', x: 0.45, y: -0.5 },
    { name: 'G2', x: 0.33, y: 0.3 },
    { name: 'G3', x: 0.15, y: 0.1 },
    { name: 'G4', x: 0.1, y: 0.1 },
    { name: 'G5', x: 0.7, y: -0.45 },
    { name: 'G6', x: 0.5, y: -0.7 },
    { name: 'G7', x: 0.3, y: -0.35 },
    { name: 'G8', x: 0.1, y: 0.35 },
    { name: 'G9', x: -0.2, y: -0.25 },
    { name: 'G10', x: 0.1, y: -0.55 },
    { name: 'G11', x: 0.25, y: -0.2 },
    { name: 'G12', x: 0.85, y: 0.4 },
    { name: 'G13', x: 0.65, y: -0.1 },
  ],
  links: [
    { source: 'G1', target: 'G5', value: 1 },
    { source: 'G1', target: 'G7', value: 1 },

    { source: 'G2', target: 'G3', value: 1 },
    { source: 'G2', target: 'G4', value: 1 },

    { source: 'G5', target: 'G7', value: 1 },
    { source: 'G5', target: 'G10', value: 1 },

    { source: 'G12', target: 'G13', value: 1 },
  ],
};
