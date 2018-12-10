export function setFilter (filter) {
  return {
    type: 'SET_FILTER',
    filter: filter
  }
}

export function setLocked (locked) {
  return {
    type: 'SET_LOCKED',
    locked : locked
  }
}
