module.exports = function forEach(array, eachFunc) {
  if (array == null) {
    return;
  }
  if(Array.isArray(array)){
    array.forEach(eachFunc);
  }else{
    eachFunc(array, 0, [array]);
  }
};
