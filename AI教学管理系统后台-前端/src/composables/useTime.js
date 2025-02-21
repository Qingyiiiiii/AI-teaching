const useTime = (T) => {
  if (T === null) return '暂无'
  //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  let date = String(T).length === 10 ? new Date(T * 1000) : new Date(T)
  let Y = date.getFullYear() + '-';
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
  let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
  let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

  return Y + M + D + h + m + s;
};


export default useTime
