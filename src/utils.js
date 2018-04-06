export function concatAll (array) {
  var results = []
  array.forEach(function(subArray) {
    results.push.apply(results, subArray)
  })

  return results
}

export function concatMap (projectionFunctionThatReturnsArray, array) {
  return concatAll(array.map(function(item) {
    return projectionFunctionThatReturnsArray(item)
  }))
  // apply the concatAll function to flatten the two-dimensional array
}

export function unique (array) {
  return [...new Set(array)]
}

export function removeDuplicates(array, prop) {
  return array.filter((obj, pos, arr) => {
    return arr.map(function thing(mapObj) {
      return mapObj[prop]
    }).indexOf(obj[prop]) === pos
  })
}

export function csvLineToArray (csvLine) {
  return csvLine.split(/\s?,\s?/)
}
