# px2remTest
flexible测试
修改node_modules/lib-flexible,使flexible在PC端生效
function refreshRem(){
var width = docEl.getBoundingClientRect().width;
if (width / dpr > 540) {
width = width * dpr;
}
var rem = width / 10;
docEl.style.fontSize = rem + 'px';
flexible.rem = win.rem = rem;
}
