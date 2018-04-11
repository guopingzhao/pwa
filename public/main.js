(function () {
    let messageDom = document.getElementById("message");
    let userOpDom = document.getElementById("user-op");
    function registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            return navigator.serviceWorker.register('/sw.js', { scope: '/' })
                .then(function (registration) {
                    messageDom.className = "success";
                    messageDom.innerHTML = `serviceWorker 注册成功<br>scope: ${registration.scope}`;
                    return registration;
                })
                .catch(function (err) {
                    messageDom.className = "error";
                    messageDom.innerHTML = `serviceWorker 注册失败<br>${err}`;
                });
        } else {
            messageDom.className = "not-pwa";
            messageDom.innerText = "你的浏览器不支持pwa"
        }
    }

    function popNotice(title="", options = {}, isTry = false) {
        if (Notification.permission == "granted" && title) {
            var notification = new Notification(title, {
                icon: '/img/pwa.png',
                ...options
            });
            return notification;
        } else {
            Notification.requestPermission(() => {
                if (isTry) popNotice(title, options);
            });
        }
    }

    window.addEventListener('load', () => {
        if (!('serviceWorker' in navigator)) {
            return;
        }
    
        if (!('PushManager' in window)) {
            return;
        }
        popNotice();
        registerServiceWorker().then((registration) => {
            registration.showNotification('Hello World!');
            popNotice('Hello World!');
        })
    });

    window.addEventListener('beforeinstallprompt', function (e) {
        e.userChoice.then(function (choiceResult) {
            if (choiceResult.outcome === 'dismissed') {
                userOpDom.className = "error";
                userOpDom.innerHTML = "用户取消安装应用";
            }
            else {
                userOpDom.className = "success";
                userOpDom.innerHTML = "用户安装了应用";
            }
        });
    });
}())