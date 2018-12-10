import { SORT, STYLE } from '../constants/lobbiesFilter'

const initialState = {
  lobbies: [],
  filter: null,
  locked: null,
  sort: SORT.UP,
  style: STYLE.LIST
}

export default (state = initialState, action) => {
 switch (action.type) {
  case 'SET_FILTER':
   return {
     ...state,
    filter: action.filter
   }

   case 'SET_LOCKED':
   return  {
     ...state,
     locked : action.locked
   }

   case 'SET_SORT':
   return  {
     ...state,
     sort : action.sort
   }

   case 'SET_STYLE':
   return  {
     ...state,
     style : action.style
   }

  default:
   return state
 }
}
