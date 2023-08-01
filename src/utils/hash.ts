import CryptoJS from 'crypto-js'

const SECRET = 'hbh78hb234bksdjf'

export const encrypt = (value: string) => {
  return CryptoJS.AES.encrypt(value, SECRET).toString();;
}

export const decrypt = (value: string) => {
  var bytes = CryptoJS.AES.decrypt(value, SECRET);
  return bytes.toString(CryptoJS.enc.Utf8);
}
