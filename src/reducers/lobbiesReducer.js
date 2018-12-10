const initialState = {
  lobbies : [],
  filter : 'none',
  locked : 'none'
}

export default (state = initialState, action) => {
 switch (action.type) {
  case 'SET_FILTER':
   return {
     ...state,
    filter: action.filter
   }

   case 'SET_FILTER':
   return  {
     ...state,
     locked : action.locked
   }

  default:
   return state
 }
}
