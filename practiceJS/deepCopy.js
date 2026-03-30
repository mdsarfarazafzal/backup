function makeDeepCopy(obj) {
  if (typeof obj !== "object" || typeof obj === "null") {
    return obj;
  }
  const result = Array.isArray(obj) ? [] : {};
  const keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    result[keys[i]] = makeDeepCopy(obj[keys[i]]);
  }
  return result;
}

module.exports = makeDeepCopy;
