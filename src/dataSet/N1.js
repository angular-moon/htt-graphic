export default {
  nodes: [
    { name: 'G1', x: 0.2, y: 0.1 },
    { name: 'G2', x: 0.36, y: 0.05 },
    { name: 'G3', x: -0.21, y: 0.25 },
    { name: 'G4', x: -0.19, y: 0.26 },
    { name: 'G5', x: -0.22, y: 0.12 },
    { name: 'G6', x: 0.3, y: -0.3 },
    { name: 'G7', x: 0.2, y: 0.28 },
    { name: 'G8', x: -0.17, y: 0.1 },
    { name: 'G9', x: -0.1, y: 0.09 },
    { name: 'G10', x: -0.35, y: 0.15 },
    { name: 'G11', x: 0.3, y: 0.31 },
    { name: 'G12', x: -0.2, y: 0.48 },
    { name: 'G13', x: 0.37, y: 0.5 },
    { name: 'G14', x: 0.38, y: 0.27 },
    { name: 'G15', x: 0.23, y: -0.2 },
    { name: 'G16', x: 0.2, y: 0.4 },
    { name: 'G17', x: 0.4, y: 0.11 },
    { name: 'G18', x: 0.22, y: -0.35 },
    { name: 'G19', x: 0.25, y: 0.1 },
    { name: 'G20', x: -0.3, y: 0.32 },
    { name: 'G21', x: -0.15, y: 0.3 },
    { name: 'G22', x: -0.18, y: 0.26 },
  ],
  links: [
    { source: 'G1', target: 'G17', value: 2 },
    { source: 'G1', target: 'G22', value: 2 },

    { source: 'G2', target: 'G3', value: 1 },
    { source: 'G2', target: 'G4', value: 1 },
    { source: 'G2', target: 'G5', value: 1 },
    { source: 'G2', target: 'G6', value: 2 },
    { source: 'G2', target: 'G7', value: 1 },
    { source: 'G2', target: 'G9', value: 1 },
    { source: 'G2', target: 'G14', value: 1 },
    { source: 'G2', target: 'G19', value: 3 },

    { source: 'G3', target: 'G4', value: 1 },
    { source: 'G3', target: 'G7', value: 2 },
    { source: 'G3', target: 'G8', value: 1 },

    { source: 'G4', target: 'G7', value: 1 },
    { source: 'G4', target: 'G18', value: 1 },
    { source: 'G4', target: 'G19', value: 1 },

    { source: 'G5', target: 'G6', value: 1 },
    { source: 'G5', target: 'G14', value: 2 },
    { source: 'G5', target: 'G21', value: 2 },

    { source: 'G6', target: 'G19', value: 1 },

    { source: 'G7', target: 'G8', value: 2 },
    { source: 'G7', target: 'G9', value: 1 },
    { source: 'G7', target: 'G19', value: 1 },

    { source: 'G8', target: 'G18', value: 1 },

    { source: 'G10', target: 'G18', value: 1 },

    { source: 'G14', target: 'G21', value: 1 },

    { source: 'G17', target: 'G22', value: 1 },
  ],
};
