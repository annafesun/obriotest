export const getZodiac = (birthmonth?: number, birthday?: number) => {
  if (!birthday) return ""

  let result = ""

  switch (birthmonth) {
    case 0:
      if (birthday >= 20) {
        result = "Aquarius"
      } else {
        result = "Capricorn"
      }
      break
    case 1:
      if (birthday >= 19) {
        result = "Pisces"
      } else {
        result = "Aquarius"
      }
      break
    case 2:
      if (birthday >= 21) {
        result = "Aries"
      } else {
        result = "Pisces"
      }
      break
    case 3:
      if (birthday >= 20) {
        result = "Taurus"
      } else {
        result = "Aries"
      }
      break
    case 4:
      if (birthday >= 21) {
        result = "Gemini"
      } else {
        result = "Taurus"
      }
      break
    case 5:
      if (birthday >= 21) {
        result = "Cancer"
      } else {
        result = "Gemini"
      }
      break
    case 6:
      if (birthday >= 23) {
        result = "Leo"
      } else {
        result = "Cancer"
      }
      break
    case 7:
      if (birthday >= 23) {
        result = "Virgo"
      } else {
        result = "Leo"
      }
      break
    case 8:
      if (birthday >= 23) {
        result = "Libra"
      } else {
        result = "Virgo"
      }
      break
    case 9:
      if (birthday >= 23) {
        result = "Scorpio"
      } else {
        result = "Libra"
      }
      break
    case 10:
      if (birthday >= 22) {
        result = "Sagittarius"
      } else {
        result = "Scorpio"
      }
      break
    case 11:
      if (birthday >= 22) {
        result = "Capricorn"
      } else {
        result = "Sagittarius"
      }
      break
  }

  return result
}
