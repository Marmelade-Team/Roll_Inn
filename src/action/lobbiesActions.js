export function setFilter (filter) {
  return {
    type: 'SET_FILTER',
    filter
  }
}

export function setLocked (locked) {
  return {
    type: 'SET_LOCKED',
    locked
  }
}

export function setSort (sort) {
  return {
    type: 'SET_SORT',
    sort
  }
}

export function setStyle (style) {
  return {
    type: 'SET_STYLE',
    style
  }
}
