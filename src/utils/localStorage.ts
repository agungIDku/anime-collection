interface LocalStorageInterface {
  key: string
  value: string
}

function setLS({ key, value }: LocalStorageInterface) {
  localStorage.setItem(key, value)
}

function removeLS(key: LocalStorageInterface['key']) {
  localStorage.removeItem(key)
}

function getLS(key: LocalStorageInterface['key']) {
  return localStorage.getItem(key) || ''
}


export { setLS, removeLS, getLS }
