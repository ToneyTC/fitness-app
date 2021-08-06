console.log('运动页.js')
require('../css/sports.less');


document.ready(function () {
  utils.createFooter('sports');
  let baseUrl = 'http://139.9.177.51:8099'

  //请求用户个人的课程列表
  let user = JSON.parse(localStorage.getItem('user'));
  $http.get('/sports/courseList', { id: user.userId }, function (res) {
    console.log(res.data);
    //最新课程的数据获取
    let newCourse = res.data.find(function (item, index) {
      return item.latest === 1
    });
    //渲染页面
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

    //渲染页面
    let html = '';
    res.data.forEach(function (item, index) {
      console.log(item);
      html += `
        <a href="./courseInfo.html?id=${item.courseId}">
          <div class="list-item mt20">
          <img src="${baseUrl + item.imgurl}" alt="">
          <div class="text">
            <p>标题：${item.name}</p>
            <p>介绍：${item.desc}</p>
          </div>
        </div>
        </a>
      `
    })
    document.querySelector('.list').innerHTML = html;
    console.log(html);


  })




  //课程列表


})