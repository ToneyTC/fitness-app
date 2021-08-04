
require('../css/edit.less');
console.log('我是 个人信息修.js');


document.ready(function () {
  let genderDom = document.querySelector('#gender');
  let birthdayDom = document.querySelector('#birthday');
  let birthdayValDom = document.querySelector('#birthdayVal');
  let pro = document.querySelector('#province');
  let city = document.querySelector('#city')
  let btn = document.querySelector('.btn')
  let nicknameInp = document.querySelector('.nickname')

  let pid = ''
  let user = JSON.parse(localStorage.getItem('user'))
  let params = {
    nickname: '',
    garnder: '',
    birthday: '',
    adderess: [],
    sign: '',
    userId: user.userId
  }

  genderDom.addEventListener('click', function () {
    weui.picker([{
      label: '男',
      value: '男'
    }, {
      label: '女',
      value: '女'
    }], {
      onConfirm: function (result) {
        document.querySelector('#genderVal').textContent = result[0].value;
      },
      title: '性别'
    });
  })



  birthdayDom.addEventListener('click', function () {
    weui.datePicker({
      start: 1850,
      end: new Date().getFullYear(),
      onConfirm: function (res) {
        let str = `${res[0].value}-${res[1].value < 10 ? '0' + res[1].value : res[1].value}-${res[2].value < 10 ? '0' + res[2].value : res[2].value}`;
        birthdayValDom.textContent = str;


      },
      title: '出生日期'
    });
  })
  pro.addEventListener('click', function () {
    $http.get('/address/province', function (res) {
      let proList = res.data;
      let arr = proList.map(function (item, index) {

        return {
          label: item.name,
          value: item.addressId
        }
      })
      weui.picker(arr, {
        onConfirm: function (result) {
          document.querySelector('#proVal').textContent = result[0].label
          pid = result[0].value;
        },
        title: '选择省份'
      })
    })
  })
  city.addEventListener('click', function () {
    $http.get('/address/city/' + pid, function (res) {
      let cityList = res.data;
      let arr = cityList.map(function (item, index) {

        return {
          label: item.name,
          value: item.addressId
        }
      })
      weui.picker(arr, {
        onConfirm: function (result) {
          document.querySelector('#cityVal').textContent = result[0].label
        },
        title: '选择城市'
      })

    })
  })
  btn.addEventListener('click', function () {
    params.nickname = nicknameInp.value;
    params.garnder = genderVal.textContent;
    params.birthday = birthdayVal.textContent;
    params.adderess[0] = document.querySelector('#proVal').textContent
    params.adderess[1] = document.querySelector('#cityVal').textContent
    params.sign = document.querySelector('.sign').value;
    $http.post('/users/userEdit', params, function (res) {
      if (res.status == 0) {
        utils.createToast(0, '修改成功');
        setTimeout(function () {
          location.href = "./about.html"
        }, 1000);
      } else {
        utils.createToast(1, '修改失败');
      }
    })
  })


})