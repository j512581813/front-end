js实现JOSN.stringify()的方法
此方法多用于将对象或者数组转换成字符串的形式

function jsonStringify(obj){
 	let type = typeof(obj);
 	if(type !="object" || type == "null"){
      if(/string|undefined|function/.test(obj)){
        obj = '"'+obj +'"';
      }
      return String(obj);
 	}else{
      let res = [];
      let arrFlag = Array.isArray(obj);
      Object.keys(obj).forEach(key=>{
        let currentType = typeof obj[key];
        let value = obj[key];
        if(/strying|undefined|function/.test(currentType)){
          value = '"' +obj[key] +'"'
        }else{
          value = jsonStringify(obj[key]);
        }
        res.push((arrFlag? "": '"' + key + '":') + String(value));
      })
      return (arrFlag?"[":"{") + String(res) + (arrFlag?"]":"}");
 	}
}