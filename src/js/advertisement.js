
require('../css/advertisement.less');

document.ready(function () {
  //获取dom 
  let timerNum = document.querySelector('.timer span');
  let jumpBtn = document.querySelector('.jump-btn');

  //倒计时功能
  setInterval(function () {
    let num = Number(timerNum.textContent) - 1;
    if (num === 0) {  //倒计时结束 --跳转到登录页
      location.href = './login.html';
      //停止倒计时
      clearInterval();
    } else {
      timerNum.textContent = num;  // 倒计时未结束 渲染时间到页面
    }

  }, 1000)


  //用户点击跳转
  jumpBtn.addEventListener('click', function (event) {
    location.href = './login.html';
  })





})