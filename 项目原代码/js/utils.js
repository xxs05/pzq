function resizeIframe(iframe) {  
    iframe.height = iframe.contentWindow.document.iframe.scrollHeight + 'px';  
}  
window.onload = function() {  
    var iframe = document.getElementById('myIframe');  
    if (iframe) {  
        iframe.onload = function() {  
            resizeIframe(iframe);  
        }  
    }  
}; 
function getDateTime() {  
    var now = new Date();  
    var date = now.getFullYear() + "年" + (now.getMonth() + 1) + "月" + now.getDate() + "日";  
    var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();  
    return { date: date, time: time };  
}  
  
function updateTime() {  
    var timeElement = document.getElementById("demo");  
    var dateTime = getDateTime();  
      
    // 检测是否为移动设备  
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);  
      
    if (isMobile) {  
        // 在移动设备上只显示时间  
        timeElement.innerHTML = dateTime.time;  
    } else {  
        // 在其他设备上显示日期和时间  
        timeElement.innerHTML = dateTime.date + " " + dateTime.time;  
    }  
}  
  
// 每秒更新一次时间  
setInterval(updateTime, 1000);
var documentHeight = Math.max(
    document.body.scrollHeight, 
    document.documentElement.scrollHeight
  );

  // 获取其他元素高度
  var otherElementHeight = document.getElementById('otherElement').offsetHeight;

  // 计算 iframe 高度
  var iframeHeight = documentHeight - otherElementHeight;

  // 设置 iframe 高度
  document.getElementById('myIframe').style.height = iframeHeight + 'px';