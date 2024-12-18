export function getClassName(cell: string) {
    switch (cell) {
        case 'W':
            return 'wall'
        case 'E':
            return 'empty'
        case 'P':
            return 'portal'
        case 'PL':
            return 'player-location'
        case 'X':
            return 'exit'
        case 'B':
            return 'bot'
        default:
            return ''
    }
}

export const levels = {
    1: [
        ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
        ['W', 'PL', 'E', 'E', 'E', 'E', 'P', 'E', 'W'],
        ['W', 'E', 'W', 'W', 'E', 'W', 'W', 'E', 'W'],
        ['W', 'E', 'W', 'E', 'E', 'E', 'W', 'E', 'W'],
        ['W', 'E', 'E', 'E', 'W', 'E', 'E', 'E', 'W'],
        ['W', 'W', 'E', 'W', 'W', 'W', 'E', 'W', 'W'],
        ['W', 'E', 'E', 'E', 'P', 'E', 'E', 'E', 'W'],
        ['W', 'W', 'W', 'W', 'E', 'W', 'W', 'X', 'W'],
        ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
    ],
    2: [
        ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
        ["W", "PL", "E", "E", "E", "W", "W", "E", "E", "E", "P", "E", "E", "W"],
        ["W", "E", "W", "W", "E", "W", "W", "E", "W", "W", "W", "E", "W", "W"],
        ["W", "E", "E", "W", "E", "E", "E", "E", "E", "W", "W", "E", "E", "W"],
        ["W", "E", "W", "W", "W", "W", "W", "W", "E", "W", "E", "E", "E", "W"],
        ["W", "E", "E", "E", "E", "E", "E", "W", "E", "W", "W", "W", "E", "W"],
        ["W", "W", "W", "E", "W", "W", "E", "W", "E", "E", "E", "W", "E", "W"],
        ["W", "E", "E", "E", "W", "E", "E", "W", "W", "W", "E", "E", "E", "W"],
        ["W", "E", "W", "W", "W", "E", "W", "W", "E", "E", "E", "W", "W", "W"],
        ["W", "P", "E", "E", "E", "E", "W", "W", "E", "W", "W", "W", "E", "W"],
        ["W", "W", "W", "W", "W", "E", "E", "W", "E", "E", "E", "E", "E", "W"],
        ["W", "W", "E", "E", "E", "E", "W", "W", "W", "W", "W", "E", "W", "W"],
        ["W", "E", "E", "W", "W", "E", "E", "E", "E", "P", "E", "E", "E", "W"],
        ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "X", "W", "W"]
    ],
    3: [],
}

export const directions = [
    [0, 1], // right
    [0, -1], // left
    [1, 0], // down
    [-1, 0], // up
];

export function findOtherPortal(currentRow: number, currentCol: number, labyrinth : string[][]): [number, number] | null {
    let foundCurrentPortal = false;

    for (let row = 0; row < labyrinth.length; row++) {
        for (let col = 0; col < labyrinth[row].length; col++) {
            if (labyrinth[row][col] === 'P') {
                if (foundCurrentPortal) {
                    
                    return [row, col];
                }

                if (row === currentRow && col === currentCol) {
                    foundCurrentPortal = true;
                    
                }
            }
        }
    }
    return null; // Geen andere P gevonden
}