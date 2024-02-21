/**
*获取当前数据类型
*
*/
function getType(obj){
  if(typeof obj !== "object") return typeof obj;
  return Object.prototype.toString(obj).call(/\^[object (\S+)\]$/,'S1');
}
