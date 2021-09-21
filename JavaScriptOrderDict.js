DictExample = {
  a: {
    key1: "value1",
  },
  b: {
    key2: "value2",
  },
  c: {
    key3: "value3",
  },
};

function sortOnKeys(dict) {
  var sorted = [];
  for (var key in dict) {
    sorted[sorted.length] = key;
  }
  sorted.sort().reverse();

  var tempDict = {};
  for (var i = 0; i < sorted.length; i++) {
    tempDict[sorted[i]] = dict[sorted[i]];
  }

  return tempDict;
}

const DictExampleOrdered = sortOnKeys(DictExample);
