require('../css/register.less')
document.ready(function () {

  let tell = document.querySelector('#phone');
  let codeText = document.querySelector('#qrCod');
  let pwd = document.querySelector('#pwd');
  let pwd1 = document.querySelector('#pwd1');
  let registerBtn = document.querySelector('.save-btn');
  
  let code = '';
  
  let captcha1 = new CaptchaMini();
  captcha1.draw(document.querySelector('#captcha1'), function (res) {
    code = res;
    console.log(code);
  });
  document.querySelector('.jump-text').addEventListener('click', function (e) {
    location.href = './login.html'
  })
  registerBtn.addEventListener('click', function (e) {
  
    if (tell.value && codeText.value && pwd.value && pwd1.value) {
      let reg = /^1[3|4|5|6|7|8|9][0-9]{9}$/;
      if (!reg.test(tell.value)) {
        utils.createToast(1, '手机号输入错误');
        return;
      }
      if (pwd.value != pwd1.value) {
        utils.createToast(1, '两次密码不一致');
        return;
      }
      if (codeText.value.toLowerCase() != code.toLowerCase()) {
        utils.createToast(1, '验证码不正确');
        return;
      }
      let data = {
        account: tell.value,
        password: pwd.value
      }
      $http.post('/users/add', data, function (res) {
        if (res.status == 0) {  
          $http.post('/users/login', data, function (res1) {
            if (res1.status == 0) {
              localStorage.setItem('user', JSON.stringify(res1.data.user));             
              untils.createToast(0, '登录成功');
              setTimeout(function () {
                location.href = './home.html'
              }, 1000)
            } else { 
              untils.createToast(1, res1.msg);
            }
          })
        } else {
          untils.createToast(1, res.msg);
        }
      })
    }
  })
})