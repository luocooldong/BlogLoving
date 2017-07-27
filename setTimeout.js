//经典定时器问题
for (var i = 1; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
    console.log("fuck" + i);
}
//  输出 9 个 10

for (let i = 1; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
    console.log("fuck" + i);
}
// 输出 0 到 9 之间的整数

for( var i = 1; i < 10; i++ ){ 
  (function(i) {
    setTimeout( function(){ 
                console.log(i); 
          }, i * 1000); 
  })(i);
}
// 输出 0 到 9 之间的整数

for (var i = 1; i < 10; i++) {
    setTimeout(function (a) {
        console.log(a);
    }(i), i * 1000);
    console.log("fuck" + i);
}
for (var i = 1; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }(), i * 1000);
    console.log("fuck" + i);
}
// 如果是这种情况的话，那么setTimeout里面的函数会立即执行，就不会再等到当前事件循环结束后了


var i = 0;
var timer = setInterval(function () {
    console.log(i);
    if (i === 9) {
        clearInterval(timer);
    }
    i++;
}, 1000);
// 输出 0 到 9 之间的整



