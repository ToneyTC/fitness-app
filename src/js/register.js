require('../css/register.less')


document.ready(function () {
  let tell = document.querySelector('#phone');
  let qr = document.querySelector('#qrCode');
  let pwd = document.querySelector('#pwd');
  let pwd1 = document.querySelector('#pwd1');
  let registerBtn = document.querySelector('.save-btn');
  console.log(registerBtn);
  let msg = document.querySelector('.msg')
  let code = '';
  let captcha1 = new CaptchaMini();
  captcha1.draw(document.querySelector('#captcha1'), function (res) {
    code = res



  });
  registerBtn.addEventListener('click', function (e) {
    if (tell.value && qr.value && pwd.value && pwd1) {
      let reg = /^1[3|4|5|6|7|8|9][0-9]{9}$/;
      if (!reg.test(tell.value)) {
         untils.createToast(1,'手机号输入有误');
        return;
      }
      if (pwd.value != pwd1.value) {
        untils.createToast(1,'两次密码不一致');
        return;
      }
      if (qr.value.toLowerCase() != code.toLowerCase()) {
        untils.createToast(1,'验证码不正确');
        return;

      }
      let data = {
        account: tell.value,
        password: pwd.value
      }
      $http.post('/users/add', data, function (res) {

        if (res.status == 0) {
          untils.createToast ('注册成功,2s后跳转登录页');
          setTimeout(function () {
            location.href = './login.html';
          }, 2000)
        } else {

          msg.textContent = res.msg;
        }
      })
    }

  })

})