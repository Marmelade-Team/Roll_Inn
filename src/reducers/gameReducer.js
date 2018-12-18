import { COLUMNS, ROWS } from '../constants/gameGridSize'

const initialState = {
  columns: COLUMNS.SM.count,
  rows: ROWS.SM.count,
  resizingCard: null,
  adventure: {
    img: 'https://img.20mn.fr/r5SvxqSZSrWS4W587_eJxw/310x190_fond-ecran-defaut-windows-xp.jpg',
    hide: false,
    columnStart: 1,
    columnEnd: 3,
    rowStart: 1,
    rowEnd: 1
  },
  quest: {
    img: 'https://aleluia.pt/wp-content/uploads/2017/11/Castle-1.jpg',
    hide: false,
    columnStart: 4,
    columnEnd: 4,
    rowStart: 1,
    rowEnd: 2
  },
  players: [
    {
      id: 'player1',
      name: 'Nico',
      img: 'https://www.abc.net.au/news/image/10074774-3x2-700x467.jpg',
      hide: false,
      columnStart: 2,
      columnEnd: 2,
      rowStart: 2,
      rowEnd: 2
    },
    {
      id: 'player2',
      name: 'Matt',
      img: 'https://pbs.twimg.com/profile_images/1035051739853082624/pzQS5OTs_400x400.jpg',
      hide: true,
      columnStart: 0,
      columnEnd: 0,
      rowStart: 0,
      rowEnd: 0
    }
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COLUMNS':
      return {
        ...state,
        columns: action.columns
      }
    case 'SET_ROWS':
      return {
        ...state,
        rows: action.rows
      }
    case 'SET_RESIZING_CARD':
      return {
        ...state,
        resizingCard: action.resizingCard
      }
    case 'SET_ADVENTURE':
      return {
        ...state,
        adventure: action.adventure
      }
    case 'SET_QUEST':
      return {
        ...state,
        quest: action.quest
      }
    case 'SET_PLAYERS':
      return {
        ...state,
        players: action.players
      }
    default:
      return state
  }
}
