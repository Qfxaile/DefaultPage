/**
 * 配置文件 - 统一管理所有 URL 和资源
 */

// ===== API 配置 =====
const API = {
    // IP地址和运营商信息（多个备用，按优先级排序）
    ipInfo: [
        'https://ipapi.co/json/',
        'https://ipwhois.app/json/',
        'http://ip-api.com/json/',
    ],

    // 天气信息（多个备用，按优先级排序）
    weather: [
        { name: 'openmeteo', url: 'https://api.open-meteo.com/v1/forecast', type: 'openmeteo' },
        { name: 'wttr', url: 'https://wttr.in/', type: 'wttr' }
    ],

    // 一言（Hitokoto）
    hitokoto: 'https://v1.hitokoto.cn/?c=i&c=d&c=k',

    // 每日60s新闻
    news: 'https://60s.viki.moe/v2/60s',
};

// ===== 资源 URL 配置 =====
const RESOURCES = {
    bgPC: '/img/bg-pc.png',          // PC端背景图
    bgAndroid: '/img/bg-android.jpg', // 移动端背景图
};

// ===== 初始化背景图 =====
function initBackground() {
    const bgElement = document.querySelector('.bg-animation');
    if (!bgElement) return;

    // 根据屏幕宽度选择背景图
    const bgUrl = window.innerWidth <= 900 ? RESOURCES.bgAndroid : RESOURCES.bgPC;
    bgElement.style.backgroundImage = `url('${bgUrl}')`;
}

// 确保在 DOM 完全就绪后执行（使用 requestAnimationFrame 避免 CSP 问题）
requestAnimationFrame(function() {
    initBackground();
});

// 窗口大小变化时更新背景图
window.addEventListener('resize', initBackground);
