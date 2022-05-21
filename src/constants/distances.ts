export const DISTANCES = {
    "A": [['B', 10], ['C', 30], ['D', 15], ['E', 40]], 
    "B": [['C', 25], ['D',10], ['A', 10], ['E', 20], ['F', 35]],
    "C": [['D', 20], ['B', 25], ['A', 30], ['E', 10], ['F', 15]],
    "D": [['C', 20], ['B', 10], ['A', 15], ['E', 5], ['F', 30]],
    "E": [['C', 10], ['B', 20], ['A', 40], ['D', 5], ['F', 25]],
    "F": [['C', 15], ['B', 35], ['D', 30], ['E', 25]],
}

export const VERTICES = ['A', 'B', 'C', 'D','E', 'F']  as const;

export type Vortex = typeof VERTICES[number];