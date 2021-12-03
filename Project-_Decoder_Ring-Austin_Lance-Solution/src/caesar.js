const caesarModule = (function () {
  // If the shift value is not present, equal to 0, less than -25, or greater than 25, the function should return false.

  function caesar(input, shift = 0, encode = true) {
    //ignore capital letters
    let lowerInput = input.toLowerCase()
    let result = ''

    // prevents illegal shifts
    if (shift === 0 || shift > 25 || shift < -25 || !shift) {
      return false
    }

    if (encode) {
      for (let i = 0; i < lowerInput.length; i++) {
        // ignore capital letters
        let asc = lowerInput.charCodeAt(i)

        //letters are shifted to left and right
        if (asc >= 97 && asc <= 122) {
          newCode = asc + shift
          // handle letters at the beginning/end of the alphabet
          if (newCode > 122) {
            newCode -= 26
          }
          if (newCode < 97) {
            newCode += 26
          }
          result += String.fromCharCode(newCode)
        }

        //leaves spaces and other symbols as is
        if (
          (asc >= 0 && asc < 10) ||
          (asc >= 32 && asc <= 47) ||
          (asc >= 58 && asc <= 64) ||
          (asc >= 91 && asc < 97) ||
          (asc >= 123 && asc < 126)
        ) {
          result += String.fromCharCode(asc)
        }
      }
    } else {
      // encode equals false
      for (let i = 0; i < lowerInput.length; i++) {
        let asc = lowerInput.charCodeAt(i)

        // //letters are shifted to left and right
        if (asc >= 97 && asc <= 122) {
          newCode = asc - shift
          //handle letters at the beginning/end of the alphabet
          if (newCode > 122) {
            newCode -= 26
          }
          if (newCode < 97) {
            newCode += 26
          }
          result += String.fromCharCode(newCode)
        }

        //symbols, spaces are left alone
        if (
          (asc >= 32 && asc <= 47) ||
          (asc >= 58 && asc <= 64) ||
          (asc >= 91 && asc < 97) ||
          (asc >= 123 && asc < 126)
        ) {
          result += String.fromCharCode(asc)
        }
      }
    }

    return result
  }
  caesar('wbyox jxdxwfkb', -3, false)

  return {
    caesar,
  }
})()

module.exports = { caesar: caesarModule.caesar }
