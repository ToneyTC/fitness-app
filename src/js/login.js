require('../css/login.less')
document.ready(function () {

  let phone = document.querySelector('#phone')
  let pwd = document.querySelector('#pwd')
  let registerBtn = document.querySelector('.save-btn');


  registerBtn.addEventListener('click', function (e) {
    let data = {
      account: phone.value,
      password: pwd.value
    }
    $http.post('/users/login', data, function (res) {

      if (res.status == 0) {
        
        localStorage.setItem('user', JSON.stringify(res.data.account))
        untils.createToast(0,'登陆成功');
        setTimeout(function () {
          location.href = './home.html';
        }, 1500)
      } else {
        untils.createToast(1,res.msg);

      }
    })
  })
})