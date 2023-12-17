const search = (value, valueArray) => {
  const compare = (a, b) => {
    const aLength = a.length;
    let temp = 0;
    for (let i = 0; i < aLength; ++i)
      a[i] === b[i] ? temp++ : temp;
    return temp === aLength;
  }
  const result = valueArray.filter(index => {
    return compare(value.toLowerCase().trim(), index.toLowerCase().trim());
  })
  return result;
}


export default search;