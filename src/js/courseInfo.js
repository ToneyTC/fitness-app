require('../css/courseInfo.less')



document.ready(function () {

    // 获取节点
    let beginBtn = document.querySelector(".begin>button")
    let backBtn = document.querySelector(".showBox>.back")
    let videoimg = document.querySelector('.showBox>img')
    let nameDom = document.querySelector(".sh-wrap>.introductionTip>.name")
    let timeDom = document.querySelector(".introductionTip .time")
    let calorieDom = document.querySelector(".introductionTip .calorie")
    let peoplenumDom = document.querySelector(".peoplenum")
    let textDom = document.querySelector(".introductionText .text")
    let frequencyDom = document.querySelector(".frequency")
    let instrumentDom = document.querySelector(".instrument")
    let concernDom = document.querySelector('.concern')
    let playBtn = document.querySelector(".play")



    const baseUrl = 'http://139.9.177.51:8099'
    // 点击开始训练
    beginBtn.addEventListener('click', function () {
        location.href = './player.html'
    })

    playBtn.addEventListener('click', function () {
        location.href = './player.html'
    })
    // 点击返回课程介绍目录
    backBtn.addEventListener('click', function (e) {
        location.href = "./theCourseCatalog.html"
    })

    // 点击关注
    concernDom.addEventListener('click', function () {
        this.textContent = '已关注'
        this.style.backgroundColor = 'yellowgreen'
    })


    // 点击开始视频播放

    // 页面渲染
    let str = location.search

    $http.get('/sports/courseDetail', { id: utils.strToObj(str).id }, function (res) {
        if (res.status == 0) {
            sessionStorage.setItem('videourl',JSON.stringify(res.data)) 
            videoimg.src = baseUrl + res.data.imgurl
            nameDom.textContent = res.data.name
            timeDom.textContent = res.data.time
            calorieDom.textContent = res.data.calorie
            peoplenumDom.textContent = res.data.peoplenum
            textDom.textContent = res.data.desc
            frequencyDom.textContent = res.data.frequency
            instrumentDom.textContent = res.data.instrument
        }
    })
})