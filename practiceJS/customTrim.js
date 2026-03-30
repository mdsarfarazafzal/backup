const string = "  abcd efgh   ";
console.log(string.trim());
String.prototype.myTrim = function () {
  return this.replace(/^\s+|\s+$/g, "");
};
console.log(string.myTrim());
