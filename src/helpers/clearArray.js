const clearArray = array =>
  array.reduce((accum, item) => {
    if (item.trim().length !== 0) {
      accum.push(item.trim());
    }
    return accum;
  }, []);

export default clearArray;
