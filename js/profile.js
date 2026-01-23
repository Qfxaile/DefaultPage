/**
 * 个人主页配置文件
 * 统一管理所有个人信息、联系方式和网站导航
 */

const HOME_CONFIG = {
    // ========== 个人基本信息 ==========
    profile: {
        // QQ号（用于自动生成QQ头像）
        qqNumber: '21518887',

        // 自定义头像URL（留空则使用QQ头像）
        avatar: '',

        // 名称/昵称
        name: 'Qfxaile',

        // 一句话简介/标语
        tagline: '热爱技术，分享生活',

        // 详细个人简介（支持HTML）
        bio: `
            <p>一名热爱技术的前端开发者</p>
            <p>喜欢折腾各种有趣的项目</p>
            <p>欢迎来到我的个人主页 ✨</p>
        `
    },

    // ========== 联系方式（圆形SVG图标） ==========
    contacts: [
        {
            name: 'Email',
            url: 'mailto:your-email@example.com',
            // SVG图标内容（内联SVG）
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`
        },
        {
            name: 'GitHub',
            url: 'https://github.com/your-username',
            icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`
        },
        {
            name: 'QQ',
            url: 'tencent://message/?uin=your-qq-number',
            icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95 0-5.52-4.48-10-10-10z"/></svg>`
        },
        {
            name: 'WeChat',
            url: '#',
            icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 01-.023-.156.49.49 0 01.201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.969-.982z"/></svg>`
        },
        {
            name: 'Bilibili',
            url: 'https://space.bilibili.com/your-bilibili-id',
            icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 01-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 01.16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z"/></svg>`
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/your-username',
            icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`
        }
    ],

    // ========== 网站导航（卡片式，图标+文字） ==========
    websites: [
        {
            title: '博客',
            url: 'https://blog.qfxaile.top',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`
        },
        {
            title: '图床',
            url: 'https://img.qfxaile.top',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>`
        },
        {
            title: '备忘录',
            url: 'https://notes.qfxaile.top',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`
        },
        {
            title: 'API文档',
            url: 'https://api.qfxaile.top',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`
        },
        {
            title: '网盘',
            url: 'https://pan.qfxaile.top',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19c0-3.037-2.463-5.5-5.5-5.5S6.5 15.963 6.5 19"></path><path d="M19 11c0-3.866-3.134-7-7-7s-7 3.134-7 7"></path><path d="M21 6c0-2.761-2.239-5-5-5s-5 2.239-5 5"></path></svg>`
        },
        {
            title: '音乐',
            url: 'https://music.qfxaile.top',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>`
        },
        {
            title: '图床',
            url: 'https://img.qfxaile.top',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>`
        },
        {
            title: '备忘录',
            url: 'https://notes.qfxaile.top',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`
        },
        {
            title: 'API文档',
            url: 'https://api.qfxaile.top',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`
        },
        {
            title: '网盘',
            url: 'https://pan.qfxaile.top',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19c0-3.037-2.463-5.5-5.5-5.5S6.5 15.963 6.5 19"></path><path d="M19 11c0-3.866-3.134-7-7-7s-7 3.134-7 7"></path><path d="M21 6c0-2.761-2.239-5-5-5s-5 2.239-5 5"></path></svg>`
        }
    ],

    // ========== 页脚内容 ==========
    footer: {
        content: '<p>© 2024 Qfxaile | 用心记录生活</p>'
    }
};

/**
 * 初始化主页内容
 * 根据配置动态生成左栏内容和页脚
 */
function initHomePage() {
    // 获取容器
    const leftContainer = document.querySelector('.container-left');
    const pageFooter = document.getElementById('pageFooter');

    // 获取头像URL（优先使用自定义头像，否则使用QQ头像）
    const avatarUrl = HOME_CONFIG.profile.avatar ||
        `https://q.qlogo.cn/headimg_dl?dst_uin=${HOME_CONFIG.profile.qqNumber}&spec=140`;

    // 生成左栏HTML内容
    leftContainer.innerHTML = `
        <div class="home-content-wrapper">
            <div class="stars">
                <span class="star" style="top: 10%; left: 15%; animation-delay: 0s;">✨</span>
                <span class="star" style="top: 20%; right: 20%; animation-delay: 0.5s;">⭐</span>
                <span class="star" style="bottom: 25%; left: 10%; animation-delay: 1s;">💫</span>
            </div>

            <!-- 头像 -->
            <img class="home-avatar" src="${avatarUrl}" alt="${HOME_CONFIG.profile.name}">

            <!-- 名称 -->
            <h1 class="home-name">${HOME_CONFIG.profile.name}</h1>

            <!-- 标语 -->
            <div class="home-tagline">${HOME_CONFIG.profile.tagline}</div>

            <!-- 个人简介 -->
            <div class="home-bio">
                <div class="bio-content">${HOME_CONFIG.profile.bio}</div>
            </div>

            <!-- 联系方式 -->
            <div class="home-section">
                <div class="home-section-title">联系方式</div>
                <div class="home-contacts">
                    ${HOME_CONFIG.contacts.map(contact => `
                        <a href="${contact.url}" class="home-contact-item" target="_blank" title="${contact.name}">
                            <div class="home-contact-icon">${contact.icon}</div>
                        </a>
                    `).join('')}
                </div>
            </div>

            <!-- 网站导航 -->
            <div class="home-section">
                <div class="home-section-title">网站导航</div>
                <div class="home-websites-scroll" id="homeWebsitesScroll">
                    <!-- 由JS生成分页内容 -->
                </div>
            </div>
        </div>
    `;

    // 生成页面级页脚
    if (pageFooter) {
        pageFooter.innerHTML = HOME_CONFIG.footer.content;
    }

    // 初始化网站导航分页（PC端）或横向滚动（移动端）
    initWebsitesPagination();

    // 初始化左栏内容缩放
    initLeftContentScale();
}

/**
 * 动态缩放左栏内容以适应容器高度
 * 当窗口缩小时，内容会按比例缩小以保持完整可见
 * 使用 zoom 属性而不是 transform，确保布局尺寸也跟随缩放
 */
function initLeftContentScale() {
    const contentWrapper = document.querySelector('.home-content-wrapper');
    if (!contentWrapper) return;

    // 获取内容的自然高度（不应用缩放时的高度）
    function getContentNaturalHeight() {
        // 临时移除缩放以获取自然高度
        const currentZoom = contentWrapper.style.zoom;
        contentWrapper.style.zoom = '1';
        const naturalHeight = contentWrapper.scrollHeight;
        contentWrapper.style.zoom = currentZoom;
        return naturalHeight;
    }

    // 更新缩放
    function updateScale() {
        const containerHeight = contentWrapper.parentElement.clientHeight;
        const naturalHeight = getContentNaturalHeight();

        // 如果内容高度小于容器高度，不需要缩放
        if (naturalHeight <= containerHeight) {
            contentWrapper.style.zoom = '1';
            return;
        }

        // 计算缩放比例（最小 0.5，防止内容过小）
        const scale = Math.max(0.5, containerHeight / naturalHeight);
        contentWrapper.style.zoom = scale;
    }

    // 初始缩放 - 等待内容完全渲染后再计算
    setTimeout(updateScale, 100);

    // 监听窗口大小变化
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(updateScale, 100);
    });
}

/**
 * 初始化网站导航分页功能
 * PC端：分页显示，每页6个（3列2行），支持定时切换和鼠标滚轮翻页
 * 移动端：保持原样，所有网站都显示
 */
function initWebsitesPagination() {
    const scrollContainer = document.getElementById('homeWebsitesScroll');
    if (!scrollContainer) return;

    const websites = HOME_CONFIG.websites;
    const isMobile = window.innerWidth <= 900;

    // 移动端：保持原样，所有网站都显示
    if (isMobile) {
        scrollContainer.innerHTML = `
            <div class="home-websites" id="homeWebsites">
                ${websites.map(website => `
                    <a href="${website.url}" class="home-website-card" target="_blank">
                        <div class="website-card-icon">${website.icon}</div>
                        <span class="website-card-title">${website.title}</span>
                    </a>
                `).join('')}
            </div>
        `;
        return;
    }

    // PC端：分页显示
    const itemsPerPage = 6; // 3列2行
    const totalPages = Math.ceil(websites.length / itemsPerPage);

    // 如果网站数量少于等于6个，不需要分页
    if (websites.length <= itemsPerPage) {
        scrollContainer.innerHTML = `
            <div class="home-websites">
                ${websites.map(website => `
                    <a href="${website.url}" class="home-website-card" target="_blank">
                        <div class="website-card-icon">${website.icon}</div>
                        <span class="website-card-title">${website.title}</span>
                    </a>
                `).join('')}
            </div>
        `;
        return;
    }

    // 生成分页HTML
    const pagesHTML = websites.map((website, index) => {
        const pageIndex = Math.floor(index / itemsPerPage);
        const isFirstInPage = index % itemsPerPage === 0;
        const isLastInPage = index % itemsPerPage === itemsPerPage - 1 || index === websites.length - 1;

        if (isFirstInPage) {
            return `
                <div class="home-websites-page ${pageIndex === 0 ? 'active' : ''}" data-page="${pageIndex}">
                    <a href="${website.url}" class="home-website-card" target="_blank">
                        <div class="website-card-icon">${website.icon}</div>
                        <span class="website-card-title">${website.title}</span>
                    </a>
            `;
        } else if (isLastInPage) {
            return `
                    <a href="${website.url}" class="home-website-card" target="_blank">
                        <div class="website-card-icon">${website.icon}</div>
                        <span class="website-card-title">${website.title}</span>
                    </a>
                </div>
            `;
        } else {
            return `
                    <a href="${website.url}" class="home-website-card" target="_blank">
                        <div class="website-card-icon">${website.icon}</div>
                        <span class="website-card-title">${website.title}</span>
                    </a>
            `;
        }
    }).join('');

    // 生成分页指示器
    const dotsHTML = Array.from({ length: totalPages }, (_, i) => `
        <div class="home-websites-dot ${i === 0 ? 'active' : ''}" data-page="${i}"></div>
    `).join('');

    scrollContainer.innerHTML = `
        <div class="home-websites-pages">
            ${pagesHTML}
        </div>
        <div class="home-websites-dots">
            ${dotsHTML}
        </div>
    `;

    // 分页状态管理
    let currentPage = 0;

    const pages = scrollContainer.querySelectorAll('.home-websites-page');
    const dots = scrollContainer.querySelectorAll('.home-websites-dot');

    // 切换到指定页面
    function goToPage(pageIndex) {
        if (pageIndex < 0) pageIndex = totalPages - 1;
        if (pageIndex >= totalPages) pageIndex = 0;

        // 移除当前活动页面的active类，添加prev类（用于过渡动画）
        pages[currentPage].classList.remove('active');
        pages[currentPage].classList.add('prev');
        dots[currentPage].classList.remove('active');

        // 激活新页面
        pages[pageIndex].classList.remove('prev');
        pages[pageIndex].classList.add('active');
        dots[pageIndex].classList.add('active');

        currentPage = pageIndex;
    }

    // 下一页
    function nextPage() {
        goToPage(currentPage + 1);
    }

    // 上一页
    function prevPage() {
        goToPage(currentPage - 1);
    }

    // 鼠标滚轮翻页
    let wheelTimeout = null;
    scrollContainer.addEventListener('wheel', (e) => {
        e.preventDefault();

        // 防抖，避免快速滚动导致连续翻页
        if (wheelTimeout) return;

        if (e.deltaY > 0) {
            nextPage();
        } else {
            prevPage();
        }

        wheelTimeout = setTimeout(() => {
            wheelTimeout = null;
        }, 500); // 500ms内只能翻一次页
    }, { passive: false });

    // 点击指示器切换页面
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const pageIndex = parseInt(dot.dataset.page);
            goToPage(pageIndex);
        });
    });

    // 窗口大小改变时重新初始化
    window.addEventListener('resize', () => {
        const newIsMobile = window.innerWidth <= 900;
        if (newIsMobile !== isMobile) {
            initWebsitesPagination();
        }
    });
}
