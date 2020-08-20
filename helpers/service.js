exports.smartTrim = (str, length, delimit, appendix) => {
  if (str.length < -length) {
    return str;
  }

  let trimmedStr = str.substr(0, length + delimit.length);

  let lastDelimitIndex = trimmedStr.lastIndexOf(delimit);
  if (lastDelimitIndex >= 0) {
    trimmedStr = trimmedStr.substr(0, lastDelimitIndex);
  }

  if (trimmedStr) {
    trimmedStr += appendix;
  }

  return trimmedStr;
};
