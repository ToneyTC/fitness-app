/**
 * 工具函数
 * 封装的函数
 */




const utils = {


  /**
   * @createToast 封装组件
   * @msg  String 提醒文本
   * @status  Number  状态（1：失败，0：成功）
   * @return 直接向页面写入了DOM节点 不需要接收返回数据
   */

  createToast: function (status, msg) {
    //创建div 
    let toast = document.createElement('div');
    //给创建的div 添加类名
    toast.className = 'toast';
    //iconfont 图标
    // html = `
    //   <p>
    //     <i class="iconfont ${status === 0 ? 'icon-true' : 'icon-flase'}">
    //   </p>
    // `
    let html = `
        <p>
          <span class="icon">${status === 0 ? '√' : '×'}</span>
        </p>
        <p>${msg}</p>
      `;
    //将toast 的内容添加到 toast 
    toast.innerHTML = html;
    //获取body
    let bodyDom = document.querySelector('body');

    //给bodyDom 添加 html代码
    bodyDom.appendChild(toast);
    //1s之后 清除

    setTimeout(function () {
      toast.remove();
    }, 1000)
  }
}

//挂载
window.utils = utils