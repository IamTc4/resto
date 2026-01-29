exports.truncate = (str, len) => str.length > len ? str.substring(0, len) + "..." : str;
