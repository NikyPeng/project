class Cache {
  cache = {};
  get(key) {
    if(key === undefined || key === null) return null;
    let data = null, value = null;
    if(Object.prototype.hasOwnProperty.call(this.cache, key)){
      data = this.cache[key];
    }else if(window.localStorage){
      data = JSON.parse(window.localStorage.getItem(key));
    } 
    if(data){
      let t = new Date().getTime() - data.date;
      if(data.exp <= t){
        delete this.cache[key];
        window.localStorage.removeItem(key);
      }else{
        value = data.value
      }
    }
    return value
  }
  set(key,value,exp) {
    if(key === undefined || key === null) return false
    exp = exp || 7 * 24 * 60 * 60 * 1000;
    let data = {
      value,
      date: new Date().getTime(),
      exp
    }
    try {
      window.localStorage && window.localStorage.setItem(key, JSON.stringify(data))
    } catch (error) {
      this.cache[key] = data;
    }
    //清理过期缓存
    this.clearAllkeys();
  }
  clearAllkeys() { //清空过期缓存
    let storage = window.localStorage;
    let reg = new RegExp(/^{.+}$/g);
    if(localStorage && localStorage.length){
      for(let i = 0; i < storage.length; i++){
        let key = storage.key(i);
        let data = storage.getItem(key);
        if(!reg.test(data)) continue;
        let t = new Date().getTime() - data.date;
        if(data.exp <= t){
          localStorage.removeItem(key);
        }
      }
    }
  }
  remove(key) {
    delete this.cache[key];
    window.localStorage && window.localStorage.removeItem(key);
  }
  clear() {
    window.localStorage && window.localStorage.clear();
    this.cache = {};
  }
}

export default new Cache()