/**
 * 深色模式控制
 * 已固定为浅色模式，保留此文件供未来扩展使用
 */

(function() {
    'use strict';

    /**
     * 初始化深色模式
     * 固定为浅色模式，禁用自动检测
     */
    function initDarkMode() {
        // 确保浅色模式
        document.body.classList.remove('dark-mode');
    }

    // 页面加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initDarkMode);
    } else {
        initDarkMode();
    }
})();
