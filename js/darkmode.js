/**
 * 深色/夜色模式切换功能
 * 支持自动检测系统偏好、手动切换、本地存储记忆
 */

(function() {
    'use strict';

    // 存储键名
    const STORAGE_KEY = 'darkMode';
    const STORAGE_SCHEMA_VERSION = 'v1';

    // 深色模式图标
    const ICONS = {
        light: '🌙',  // 亮色模式显示月亮图标（点击切换到深色）
        dark: '☀️'    // 深色模式显示太阳图标（点击切换到亮色）
    };

    /**
     * 获取存储的深色模式偏好
     * @returns {boolean|null} 返回 true/false/null（null表示未设置）
     */
    function getStoredPreference() {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                const data = JSON.parse(stored);
                // 检查版本兼容性
                if (data.version === STORAGE_SCHEMA_VERSION) {
                    return data.enabled;
                }
            }
        } catch (e) {
            console.warn('读取深色模式偏好失败:', e);
        }
        return null;
    }

    /**
     * 保存深色模式偏好到本地存储
     * @param {boolean} enabled 是否启用深色模式
     */
    function savePreference(enabled) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify({
                enabled: enabled,
                version: STORAGE_SCHEMA_VERSION,
                timestamp: Date.now()
            }));
        } catch (e) {
            console.warn('保存深色模式偏好失败:', e);
        }
    }

    /**
     * 检测系统深色模式偏好
     * @returns {boolean} 系统是否偏好深色模式
     */
    function getSystemPreference() {
        if (window.matchMedia) {
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return false;
    }

    /**
     * 应用深色模式到页面
     * @param {boolean} enabled 是否启用深色模式
     */
    function applyDarkMode(enabled) {
        if (enabled) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
        updateToggleButton();
    }

    /**
     * 更新切换按钮的图标
     */
    function updateToggleButton() {
        const button = document.getElementById('darkModeToggle');
        if (button) {
            const isDark = document.body.classList.contains('dark-mode');
            button.textContent = isDark ? ICONS.dark : ICONS.light;
        }
    }

    /**
     * 切换深色模式状态
     */
    function toggleDarkMode() {
        const isDark = document.body.classList.contains('dark-mode');
        const newState = !isDark;

        // 应用新模式
        applyDarkMode(newState);

        // 保存用户偏好
        savePreference(newState);

        // 触发自定义事件，供其他模块监听
        window.dispatchEvent(new CustomEvent('darkModeChanged', {
            detail: { enabled: newState }
        }));
    }

    /**
     * 初始化深色模式
     * 已固定为浅色模式，禁用自动检测
     */
    function initDarkMode() {
        // 固定为浅色模式，不检测系统偏好
        applyDarkMode(false);

        // 清除可能存在的旧偏好设置
        try {
            localStorage.removeItem(STORAGE_KEY);
        } catch (e) {
            // 忽略清除失败
        }
    }

    /**
     * 更新切换按钮的状态（空函数，无手动切换）
     */
    function updateToggleButton() {
        // 无手动切换按钮
    }

    // 页面加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initDarkMode);
    } else {
        initDarkMode();
    }

    // 导出到全局作用域（供外部调用）
    window.DarkMode = {
        toggle: toggleDarkMode,
        enable: () => { applyDarkMode(true); savePreference(true); },
        disable: () => { applyDarkMode(false); savePreference(false); },
        isEnabled: () => document.body.classList.contains('dark-mode')
    };
})();
