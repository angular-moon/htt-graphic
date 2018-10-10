export default {
  nodes: [
    { name: 'G1', x: 0.4, y: 0.85 },
    { name: 'G3', x: 0.7, y: 0.45 },
    { name: 'G4', x: 0.55, y: -0.5 },
    { name: 'G5', x: 0.45, y: -0.7 },
    { name: 'G6', x: 0.2, y: -0.2 },
    { name: 'G7', x: 0.3, y: -0.5 },
    { name: 'G8', x: 0.6, y: -0.3 },
    { name: 'G9', x: 0.65, y: 0.3 },
    { name: 'G10', x: 0.58, y: 0.5 },
    { name: 'G11', x: -0.2, y: 0.8 },
    { name: 'G12', x: 0.4, y: 0.6 },
    { name: 'G13', x: 0.65, y: 0.82 },
  ],
  links: [
    { source: 'G1', target: 'G12', value: 1 },
    { source: 'G1', target: 'G13', value: 2 },

    { source: 'G4', target: 'G6', value: 1 },
    { source: 'G4', target: 'G7', value: 3 },
    { source: 'G4', target: 'G10', value: 3 },

    { source: 'G6', target: 'G7', value: 1 },
    { source: 'G6', target: 'G10', value: 1 },

    { source: 'G7', target: 'G10', value: 3 },

    { source: 'G8', target: 'G11', value: 1 },

    { source: 'G12', target: 'G13', value: 2 },
  ],
};
