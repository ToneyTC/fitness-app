
require('../css/edit.less');
console.log('我是 个人信息修.js');


document.ready(function () {
  let genderDom = document.querySelector('#gender');
  let birthdayDom = document.querySelector('#birthday');
  let birthdayValDom = document.querySelector('#birthdayVal');

  genderDom.addEventListener('click', function () {
    weui.picker([{
      label: '男',
      value: '男'
    }, {
      label: '女',
      value: '女'
    }], {
        onConfirm: function (result) {
          console.log('确认值');
          console.log(result[0].value);
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
        console.log(res);
        let str = `${res[0].value}-${res[1].value}-${res[2].value}`
        console.log(str);
        birthdayValDom.textContent = str;

      },
      title: '出生日期'
    });
  })





}) 