// 防抖函数
export function debounce(func, wait = 400){
  let time = null;
  return function(...args){
    if(time) clearTimeout(time)
    time = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}
