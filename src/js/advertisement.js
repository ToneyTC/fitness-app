require('../css/advertisement.less')


document.ready(function(){
  let timer = document.querySelector('.time span');
  let skip =  document.querySelector('.skipBox');
  setInterval(function()  {
      let num =Number(timer.textContent)-1;
      if (num===0){
        location.href='./login.html'
        clearInterval();
    }else{
        timer.textContent=num;
    }
  }, 1000);
 skip.addEventListener('click',function(evet){
    location.href='./login.html'
 })
})