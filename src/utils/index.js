/**
 * 千分位
 */
export default {
  fNum (num) {
    num = Number(num)
    if (Number.isNaN(num)) return 0
    var m = num.toExponential().match(/\d(?:\.(\d*))?e([+-]\d+)/)
    return num.toFixed(Math.max(0, (m[1] || '').length - m[2]))
    /**
     * 用.toExponential()将数字转化为科学记数法表示，匹配正则表达式/\d(?:\.(\d*))?e([+-]\d+)/,获取科学记数法中小数点后的字符及幂指数（e 后面的值），这样可以确定数字是几位小数。再用toFixed() 转换成数值表示。
     */
  },
  thousandsBit (n, a)  {
    if (a) {
      n = Number(n).toFixed(a)
    }
    n = this.fNum(n)
    n = '' + n
    var re = /\d{1,3}(?=(\d{3})+$)/g
    var n1 = n.replace(/^(\d+)((\.\d+)?)$/, function (s, s1, s2) {
      return s1.replace(re, "$&,") + s2;
    })
    return n1
  }
}
