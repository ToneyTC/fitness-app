/**
 * 工具函数
 */
const untils = {
    createToast: function (status, msg) {
        let toast = document.createElement('div');
        toast.className = 'toast';
        let html = `
     <p>
     <span class='icon'>${status === 0 ? '✔' : '✘'}</span>
     </p>
     <p>${msg}</p>`
        toast.innerHTML = html;
        let bodyDom = document.querySelector('body');
        bodyDom.appendChild(toast)

        setTimeout(function () {
            toast.remove();
        }, 1000)
    }

}
window.untils = untils
