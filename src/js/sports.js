console.log('运动页.js')
require('../css/sports.less');


document.ready(function () {
  utils.createFooter('sports');
  let baseUrl = 'http://139.9.177.51:8099'
  let user = JSON.parse(localStorage.getItem('user'));
  $http.get('/sports/courseList', { id: user.userId }, function (res) {
    

    let newCourse = res.data.find(function (item, index) {
      return item.latest === 1
    });
    let newHtml = `
      <div class="item">
      <div class="item-img">
        <img src="${baseUrl + newCourse.imgurl}" alt="">
      </div>
      <div class="title">
        标题：${newCourse.name}
        <p>介绍：${newCourse.desc}</p>
      </div>
    </div>
     `;
    document.querySelector('.new').innerHTML = newHtml;
    console.log(newCourse);

  })
  // for(let a=0;a<=res.data.){}

})