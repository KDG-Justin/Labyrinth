

export function getClassName(cell: string){
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
        default:
            return ''
    }
}