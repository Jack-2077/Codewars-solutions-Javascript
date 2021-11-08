function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter(x => Number.isInteger(x))
  // return l.filter(x => typeof x == 'number')
}