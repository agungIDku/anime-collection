function firstCharUppercase(str: string) {
  return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1)
}

function sanitizeSpecialChar(str: string) {
  return str.replace(/[^\w\s]/gi, '')
}

export { firstCharUppercase, sanitizeSpecialChar }
