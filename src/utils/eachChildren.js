/**
 * Created by Administrator on 2017/7/5.
 */
module.exports = function eachChildren(children, eachFunc) {
  if (children == null) {
    return;
  }
  if(Array.isArray(children)){
    children.forEach(eachFunc);
  }else{
    eachFunc(children, 0, [children]);
  }
};
