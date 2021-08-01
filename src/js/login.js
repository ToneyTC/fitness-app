require('../css/login.less')
console.log('我是login。js');
document.ready(function () {


  //获取dom
  // input xxinp  xxDom  xxBtn
  let accountInp = document.querySelector('#account');
  let passwordInp = document.querySelector('#password');
  let saveBtn = document.querySelector('.save-btn');



  //跳转注册页
  document.querySelector('.jump-text').addEventListener('click', function (e) {
    location.href = './register.html';
  })


  //登录业务
  // 事件监听---saveBtn 
  // 输入账号/密码
  // - 账号 密码 格式进行验证【正则】
  // - 获取账号密码 通过后端的  登录接口 将数据传递给后端 进行登录

  saveBtn.addEventListener('click', function (e) {
    if (accountInp.value && passwordInp.value) {
      //接口请求
      let data = { account: accountInp.value, password: passwordInp.value }
      //登录接口
      $http.post('/users/login', data, function (res) {
        //登录成功
        if (res.status == 0) {
          //将数据存到本地存储

          localStorage.setItem('user', JSON.stringify(res.data.user));
          //跳转页面到首页
          utils.createToast(0, '登录成功');

          //1S 跳转
          setTimeout(function () {
            location.href = './home.html'
          }, 1000)


        } else { //登录失败
          //提醒
          utils.createToast(1, res.msg);
        }

      })
    }

  })



})