
class MyPromise1 {
  constructor(callback){
    this.status = "pending";
    this.value = undefined;
    this.reason = undefined;
    this.onResovledFns = [];
    this.onRejectedFns = [];
    const resovle = value=>{
      if(this.status = "pending"){
        this.status = "resolved"
        this.value = value;
        this.onResovledFns.forEach(cb=>{
          cb(value)
        })
      }
    }
    const reject = value=>{
      if(this.status == "pending"){
        this.status = "rejected";
        this.reason = value;
        this.onRejectedFns.forEach(cb=>{
          cb(value)
        })
      }
    }
    try{
      callback(resovle,reject);
    }catch(err){
      reject(err)
    }
  }
  then=>(onFilfulled,onRejected){
        if(this.status === 'pending'){
            //事件订阅
            this.onResovledFns.push(onFilfulled);
            this.onRejectedFns.push(onRejected)
        }else if(this.status === 'filfulled'){
            onFilfulled(this.value)
        }else{
            onRejected(this.reason)
        }
    }
}


/**
 *函数实现方式
 * @param {*}
 */
function MyPromise(excutor){

    let self = this;
    this.status = 'pending';
    this.value = null;
    this.reason = null;

    //事件缓存
    this.fulfilledFns = [];
    this.rejectedFns = [];
    // 成功响应
    function resolve(value){
        if(self.status === 'pending'){
            self.value = value;
            self.status = 'fulfilled';
            //事件发布
            self.fulfilledFns.forEach(fn => fn(value))
        }
    }
    // 失败事件
    function reject(reason){
        if(self.status === 'pending'){
            self.reason = reason;
            self.status = 'rejected';
            //事件发布
            self.rejectedFns.forEach(fn => fn(reason))
        }
    }

    //执行器
    try{
        excutor(resolve,reject)
    } catch(err){
        reject(err)
    }
}

//then
MyPromise.prototype.then = function(onFulfilled,onRejected){
    let self = this;
    //异步事件订阅
    if(self.status === 'pending'){
        self.fulfilledFns.push(onFulfilled)
        self.rejectedFns.push(onRejected)
    }else if(self.status === 'fulfilled'){
        onFulfilled(self.value)
    }else{
        onRejected(self.reason)
    }

}
