/**
 * 配置文件 - 统一管理所有硬编码的URL链接
 */

// ===== API 配置 =====
const API = {
    // IP地址和运营商信息
    ipInfo: 'https://ipapi.co/json/',

    // 一言（Hitokoto）
    hitokoto: 'https://v1.hitokoto.cn/?c=i&c=d&c=k',

    // 每日60s新闻
    news: 'https://60s.viki.moe/v2/60s',

    // 天气信息（wttr.in，使用时需拼接参数）
    weather: 'https://wttr.in/',
};

// ===== 资源 URL 配置 =====
const RESOURCES = {
    // QQ头像（dst_uin=QQ号，spec=尺寸）
    qqAvatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=21518887&spec=140',

    // 可改成远程链接
    // PC端背景图
    bgPC: '/img/bg-pc.png',

    // 移动端背景图
    bgAndroid: '/img/bg-android.jpg',

    // 深色模式背景图（可选，留空则使用默认背景）
    // 如需为深色模式配置不同背景，取消下方注释并填入图片路径
    // bgDarkPC: '/img/bg-dark-pc.png',
    // bgDarkAndroid: '/img/bg-dark-android.jpg',
};

// ===== 初始化 CSS 变量 =====
// 将资源配置设置为CSS变量，供CSS文件使用
function initCSSVariables() {
    const root = document.documentElement;
    root.style.setProperty('--bg-pc', `url('${RESOURCES.bgPC}')`);
    root.style.setProperty('--bg-android', `url('${RESOURCES.bgAndroid}')`);

    // 深色模式背景（可选）
    if (RESOURCES.bgDarkPC) {
        root.style.setProperty('--bg-dark-pc', `url('${RESOURCES.bgDarkPC}')`);
    }
    if (RESOURCES.bgDarkAndroid) {
        root.style.setProperty('--bg-dark-android', `url('${RESOURCES.bgDarkAndroid}')`);
    }
}

// 页面加载时立即初始化CSS变量
initCSSVariables();
