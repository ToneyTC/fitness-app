require('../css/player.less')
document.ready(function () {
  let baseUrl = 'http://139.9.177.51:8099';
  let videoList = JSON.parse(localStorage.getItem('videoList'));
  console.log(videoList);
  let videoDom = document.querySelector('video');
  let numDom = document.querySelector('.number');
  let lenDom = document.querySelector('.allClass');
  let titleDom = document.querySelector('.title')
  let next = document.querySelector('#next');
  let pre = document.querySelector('#pre')
  let pro=document.querySelector('.pro')
  let ples=document.querySelector('#ple')
  let videoIndex = 0;
  function play(index) {
    let videoUrl = baseUrl + videoList[index].videoUrl;
    videoDom.src = videoUrl
    numDom.textContent = videoIndex + 1;
    lenDom.textContent = videoList.length;
    titleDom.textContent = videoList[index].title;
  }
  play(videoIndex)
  videoDom.addEventListener('ended', function () {
    videoIndex++;
    if (videoIndex < videoList.length) {
      play(videoIndex);
    }

  })
  pre.addEventListener('click', function () {
    if (videoIndex - 1 >= 0) {
      videoIndex--
      play(videoIndex);
    }
  })
  next.addEventListener('click', function () {
    if (videoIndex + 1 < videoList.length) {
      videoIndex++
      play(videoIndex);
    }
  })

  setInterval(function(){
    let len=parseInt((videoDom.currentTime/videoDom.duration)*100)
    pro.style.width=len+'%'
  }, 0.1);


  ples.addEventListener('click',function(){
    console.log(videoDom);
    if (videoDom.paused) {
      videoDom.play();
  } else {
    videoDom.pause();
  }
  
  
  })
})

