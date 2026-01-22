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
     */
    function initDarkMode() {
        // 1. 首先检查用户是否有手动保存的偏好
        const stored = getStoredPreference();

        if (stored !== null) {
            // 使用用户保存的偏好
            applyDarkMode(stored);
        } else {
            // 2. 没有保存的偏好，检测系统偏好
            const systemPrefersDark = getSystemPreference();
            applyDarkMode(systemPrefersDark);
        }

        // 3. 创建并添加切换按钮
        createToggleButton();

        // 4. 监听系统偏好变化（如果没有手动设置）
        if (window.matchMedia && stored === null) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addEventListener('change', (e) => {
                applyDarkMode(e.matches);
            });
        }
    }

    /**
     * 创建深色模式切换按钮
     */
    function createToggleButton() {
        // 检查是否已存在按钮
        if (document.getElementById('darkModeToggle')) {
            return;
        }

        const button = document.createElement('button');
        button.id = 'darkModeToggle';
        button.className = 'dark-mode-toggle';
        button.setAttribute('aria-label', '切换深色/浅色模式');
        button.setAttribute('title', '切换深色/浅色模式');
        button.textContent = ICONS.light;
        button.addEventListener('click', toggleDarkMode);

        document.body.appendChild(button);
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
