/**
 * 时间更新功能
 */

function updateTime() {
    const now = new Date();

    // 星期几
    const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
    const weekdayStr = '星期' + weekdays[now.getDay()];

    // 年月日（中文格式：2026年01月22日 星期四）
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const dateStr = `${year}年${month}月${day}日 ${weekdayStr}`;

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
