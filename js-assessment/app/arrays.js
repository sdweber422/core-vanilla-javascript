exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf( item )
  },

  sum: function(arr) {
    return arr.reduce( ( accumulator, value ) => accumulator + value, 0 )
  },

  remove: function(arr, item) {
    while( arr.includes( item ) ) {
      arr.splice( arr.indexOf( item ), 1 )
    }
    return arr
  },

  removeWithoutCopy: function(arr, item) {
    while( arr.includes( item ) ) {
      arr.splice( arr.indexOf( item ), 1 )
    }
    return arr
  },

  append: function(arr, item) {
    arr.push( item )
    return arr
  },

  truncate: function(arr) {
    arr.pop()
    return arr
  },

  prepend: function(arr, item) {
    arr.unshift( item )
    return arr
  },

  curtail: function(arr) {
    arr.shift()
    return arr
  },

  concat: function(arr1, arr2) {
    return arr1.concat( arr2 )
  },

  insert: function(arr, item, index) {
    arr.splice( index, 0, item )
    return arr
  },

  count: function(arr, item) {
    let count = 0
    function counter( array ) {
      array.forEach( value => {
        if ( Array.isArray( value ) ) {
          return counter( value )
        }
        if ( value === item ) {
          count++
        }
      })
    }
    counter( arr )
    return count
  },

  duplicates: function(arr) {
    return arr.filter( value => arr.indexOf( value ) !== arr.lastIndexOf( value ) ).filter( ( element, index, array ) => array.indexOf( element ) === index )
  },

  square: function(arr) {
    return arr.map( value => value * value )
  },

  findAllOccurrences: function(arr, target) {
    return arr.reduce( ( memo, value, index ) => {
      if (value === target ) {
        memo.push( index )
      }
      return memo
    }, [])
  }
};
