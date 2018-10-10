export default {
  nodes: [
    { name: 'G1', x: 0.2, y: 0.8 },
    { name: 'G2', x: 0.2, y: 0.3 },
    { name: 'G3', x: 0.45, y: 0.35 },
    { name: 'G4', x: -0.3, y: 0.33 },
    { name: 'G5', x: -0.2, y: 0.45 },
    { name: 'G6', x: -0.15, y: 0.25 },
    { name: 'G7', x: 0.1, y: 0.5 },
    { name: 'G8', x: 0.25, y: 0.2 },
    { name: 'G9', x: 0.45, y: -0.2 },
    { name: 'G10', x: 0.75, y: -0.1 },
    { name: 'G11', x: 0.5, y: 0.1 },
    { name: 'G12', x: 0.55, y: -0.4 },
    { name: 'G13', x: 0.35, y: -0.65 },
    { name: 'G14', x: -0.2, y: 0.15 },
    { name: 'G15', x: -0.1, y: 0.05 },
    { name: 'G16', x: 0.1, y: -0.2 },
    { name: 'G17', x: 0.28, y: 0.1 },
    { name: 'G18', x: 0.15, y: -0.1 },
    { name: 'G19', x: -0.4, y: 0.27 },
  ],
  links: [
    { source: 'G1', target: 'G3', value: 1 },
    { source: 'G1', target: 'G19', value: 1 },

    { source: 'G2', target: 'G4', value: 2 },
    { source: 'G2', target: 'G15', value: 1 },

    { source: 'G3', target: 'G8', value: 1 },

    { source: 'G4', target: 'G15', value: 1 },
    { source: 'G4', target: 'G16', value: 1 },

    { source: 'G5', target: 'G6', value: 2 },
    { source: 'G5', target: 'G9', value: 1 },
    { source: 'G5', target: 'G10', value: 1 },
    { source: 'G5', target: 'G17', value: 2 },

    { source: 'G6', target: 'G11', value: 1 },
    { source: 'G6', target: 'G17', value: 1 },

    { source: 'G9', target: 'G18', value: 1 },

    { source: 'G10', target: 'G11', value: 1 },

    { source: 'G15', target: 'G16', value: 1 },

    { source: 'G17', target: 'G18', value: 1 },
  ],
};
