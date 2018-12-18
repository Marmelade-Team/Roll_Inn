export function setColumns (columns) {
    return {
      type: 'SET_COLUMNS',
      columns
    }
  }

  export function setRows (rows) {
    return {
      type: 'SET_ROWS',
      rows
    }
  }

  export function setResizingCard (resizingCard) {
    return {
      type: 'SET_RESIZING_CARD',
      resizingCard
    }
  }

  export function setAdventure (adventure) {
    return {
      type: 'SET_ADVENTURE',
      adventure
    }
  }

  export function setQuest (quest) {
    return {
      type: 'SET_QUEST',
      quest
    }
  }

  export function setPlayers (players) {
    return {
      type: 'SET_PLAYERS',
      players
    }
  }