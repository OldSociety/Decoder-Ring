const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) {
      return false
    }

    var charArray = Array.from(alphabet)
    for (var w = 0; w < charArray.length; w++) {
      if (alphabet.indexOf(alphabet[w]) !== alphabet.lastIndexOf(alphabet[w])) {
        return false
      }
    }

    let lowerInput = input.toLowerCase()
    let lowerCypher = alphabet.toLowerCase()
    const trueAlphabet = 'abcdefghijklmnopqrstuvwxyz'
    let result = ''

    cypherArray = []
    alphaArray = []
    inputArray = []
    newArray = []

    for (let a = 0; a < trueAlphabet.length; a++) {
      alphaArray.push(trueAlphabet[a])
    }

    for (let b = 0; b < lowerCypher.length; b++) {
      cypherArray.push(lowerCypher[b])
    }

    for (let c = 0; c < lowerInput.length; c++) {
      inputArray.push(lowerInput[c])
    }

    var mergedArray = cypherArray.reduce(function (mergedArray, field, index) {
      mergedArray[alphaArray[index]] = field
      return mergedArray
    }, {})

    if (encode) {
      for (let i = 0; i < input.length; i++) {
        if (input[i] === ' ') {
          result += ' '
        }
        for (const key in mergedArray) {
          if (input[i] === key) {
            result += mergedArray[key]
          }
        }
      }
    } else {
      for (let i = 0; i < input.length; i++) {
        if (input[i] === ' ') {
          result += ' '
        }
        for (const key in mergedArray) {
          if (input[i] === mergedArray[key]) {
            result += key
          }
        }
      }
    }

    return result
  }
  substitution('message', '.waeszrdxtfcygvuhbijnokmpl')

  return {
    substitution,
  }
})()

module.exports = { substitution: substitutionModule.substitution }
