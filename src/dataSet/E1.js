export default {
  nodes: [
    { name: 'G1', x: 0.7, y: 0.8 },
    { name: 'G2', x: -0.7, y: -0.1 },
    { name: 'G3', x: 0.2, y: -0.2 },
    { name: 'G4', x: -0.3, y: 0.1 },
    { name: 'G5', x: -0.2, y: -0.2 },
    { name: 'G6', x: -0.15, y: -0.2 },
    { name: 'G7', x: 0.25, y: -0.15 },
    { name: 'G9', x: 0.4, y: 0.3 },
    { name: 'G10', x: 0.35, y: 0.2 },
    { name: 'G11', x: -0.2, y: -0.75 },
    { name: 'G12', x: 0.37, y: -0.8 },
    { name: 'G13', x: 0.6, y: -0.1 },
    { name: 'G14', x: -0.15, y: 0.23 },
    { name: 'G15', x: 0.1, y: -0.6 },
  ],
  links: [
    { source: 'G1', target: 'G4', value: 2 },
    { source: 'G1', target: 'G14', value: 3 },

    { source: 'G2', target: 'G12', value: 1 },

    { source: 'G3', target: 'G4', value: 1 },
    { source: 'G3', target: 'G14', value: 3 },

    { source: 'G4', target: 'G14', value: 1 },

    { source: 'G5', target: 'G6', value: 3 },

    { source: 'G9', target: 'G10', value: 1 },

    { source: 'G10', target: 'G13', value: 1 },

    { source: 'G11', target: 'G12', value: 1 },
    { source: 'G11', target: 'G15', value: 1 },
  ],
};
