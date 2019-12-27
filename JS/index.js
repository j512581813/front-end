//map 映射,map()方法返回一个新数组，数组中的元素为原始数组元素调用函数处理的后值
//js原生map实现
Array.prototype.map1 = function(fn){
  if (typeof fn !== "function") {
    throw new TypeError(`${fn} is not a function`);
   }
  let arr = [];
  for(let i = 0;i < this.length; i++){
    arr.push(fn(this[i]));
  }
  return arr;
}

var arr = [1,2,3,4,5];
var newArr = arr.map1(item=>{
  return item * 2;
})
console.log(newArr);

// filter, filter()方法返回一个符合当前条件元素的新的集合数组
//filter 原生实现
Array.prototype.filter1 = function(fn){
  if(typeof fn !== "function"){throw new TypeError(`${fn} is not a function`);}
  let arr = [];
  for(let i = 0; i < this.length; i++){
    fn(this[i]) && arr.push(this[i]);
  }
  return arr;
}
var arr = [1,2,3,4,5];
var newArr2 = arr.filter1(item=>{
  return item > 2;
})
console.log(newArr2);

//find find()返回符合条件的第一个元素
//find js原生实现
Array.prototype.find1 = function(fn){
  if(typeof fn !== "function") throw new TypeError(`${fn} is not a function`);
  for(let i = 0; i < this.length; i++){
    if(fn(this[i])) return this[i];
  }
}

var arr = [1,2,3,2,4];
var newArr = arr.find1((item) => {
  return item == 2;
})
console.log(newArr)

//reduce 返回数组总和
Array.prototype.reduce1 = function(fn,initVal){
  if(typeof fn !== 'function') throw new TypeError(`${fn} is not a function`);
  for(let i = 0 ;i < this.length; i++){
    initVal = fn(initVal,this[i],i,this);
  }
  return initVal;
}

var arr = [1,4,3,2,4,1,43,5,43];
let sum = arr.reduce1((item,val)=>{
  return item + val;
},0)
console.log(sum)


//some 判断数组里面的元素如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。如果没有满足条件的元素，则返回false。
Array.prototype.some = function(fn){
  if(typeof fn !== 'function') throw new TypeError(`${fn} is not a function`);
  for(let i = 0; i < this.length; i++){
    if(fn(this[i])) return true;
  }
  return false;
}
var arr = [1,2,3,2,4];
var newArr = arr.some((item) => {
  return item == 2;
})
console.log(newArr)


//every 判断数组的里面的每一个元素是否符合当前条件。只要一个不符合当前条件，则返回false,如果每一个元素都符合当前条件，则返回true
Array.prototype.every1 = function(fn){
  if(typeof fn !== 'function') throw new TypeError(`${fn} is not a function`);
  for(let i = 0; i < this.length; i++){
    if(!fn(this[i])) return false;
  }
  return true;
}
var arr = [1,2,3,2,4];
var newArr = arr.every1((item) => {
  return item > 2;
})
console.log(newArr)
