const rooms = {
    'roomId': {
        board: [],
        currentPlayer: 'id' || 'x',
        players: [],
        p1: {
            id: 'socketId',
            shape: 'x',
            avatar:'',
            name: '',
            wins: ''
        }
    }
}

const playerToRoom = { 'socketId' : 'roomId'}


const room = rooms[playerToRoom['socketId']]

