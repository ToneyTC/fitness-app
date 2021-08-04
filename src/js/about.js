
require('../css/about.less');
document.ready(function () {
  utils.createFooter('about')

  const baseUrl = 'http://139.9.177.51:8099'

  let userNameDom = document.querySelector('.user-name')
  let msgDom = document.querySelector('.msg>span')
  let calorieDom = document.querySelector('.calorie')
  let tiemerDom = document.querySelector('.times')
  let user = JSON.parse(localStorage.getItem('user'))
  let imgDom=document.querySelector('#userImg')
  let userImg=document.querySelector('.user')
  $http.get('/users/accountinfo', { userId: user.userId }, function (res) {
    if (res.status == 0) {
      userNameDom.textContent = res.data.nickname;
      if (res.data.sign) {
        msgDom.textContent = res.data.sign;
      }
      if (res.data.imgurl) {
      }
    }
  })
  $http.get('/users/mysportsBadge', { userId: user.userId }, function (res) {
    if (res.status == 0) {
      calorieDom.textContent = res.data.sports.calorie;
      tiemerDom.textContent = res.data.sports.times;
    }
  })
  imgInp.addEventListener('change', function () {
    console.log(this.files[0]);
    $updateFile('/users/upload', 'imgurl', this.files[0], function (res) {
      let url = baseUrl + res.data;
   
      document.querySelector('#userImg').src = url;
    })
  }),
  imgDom.addEventListener('click',function(e){
    imgInp.click();
    e.stopPropagation();
  })
  userImg.addEventListener('click',function(){
    location.href="./edit.html"
  })
   imgInp.addEventListener('change', function () {
    console.log(this.files[0]);
    $updateFile('/users/upload', 'imgurl', this.files[0], function (res) {
      console.log(res);
      let url = baseUrl + res.data;
      document.querySelector('#userImg').src = url;
      $http.post('/users/userEdit', { imgurl: url, userId: user.userId }, function (res) {
      })
    })
  })
  $http.get('/users/accountinfo', { userId: user.userId }, function (res) {
    console.log(res.data);
    
    if (res.status == 0) {
      userNameDom.textContent = res.data.nickname;
      if (res.data.sign) {
        msgDom.textContent = res.data.sign;
      }
      if (res.data.imgurl) {
        imgDom.src = res.data.imgurl;
      }
    }

  })
  
})
