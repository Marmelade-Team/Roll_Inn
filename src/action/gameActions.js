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