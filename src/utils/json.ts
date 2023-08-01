function convertJsonString(str: string) {
  try {
      JSON.parse(str);
  } catch (e) {
      return false;
  }
  return JSON.parse(str);
}

export { convertJsonString }
