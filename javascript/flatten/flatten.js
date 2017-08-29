module.exports = function Flatten(array = [], level = -1, flatArray = []) {
  if (!array.length) { return array }

  array.forEach(function(item) {
    if ( Array.isArray(item) && level != 0 ) {
      level--
      Flatten(item, level, flatArray)
    } else {
      flatArray.push(item)
    }
  })

  return flatArray
}
