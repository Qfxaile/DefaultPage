/**
 * 时间更新功能
 */

function updateTime() {
    const now = new Date();

    // 年月日
    const dateStr = now.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).replace(/\//g, '.');

    // 时分秒
    const timeStr = now.toLocaleTimeString('zh-CN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

    document.getElementById('currentDate').textContent = dateStr;
    document.getElementById('currentTime').textContent = timeStr;
}

// 初始化并每秒更新
updateTime();
setInterval(updateTime, 1000);
