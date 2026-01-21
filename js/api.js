/**
 * API 调用功能（IP、一言、新闻）
 */

// ===== IP 地址和定位信息 =====

async function fetchIpInfo() {
    try {
        // 获取IP和详细信息
        const response = await fetch(API.ipInfo, {
            signal: AbortSignal.timeout(5000)
        });
        const data = await response.json();

        // 更新 IP 地址
        const ipElement = document.getElementById('ipAddress');
        ipElement.textContent = data.ip || '获取失败';
        ipElement.classList.remove('loading');

        // 更新运营商
        const ispElement = document.getElementById('isp');
        if (data.org || data.asn) {
            ispElement.textContent = data.org || data.asn;
        } else {
            ispElement.textContent = '获取失败';
        }

        // 检测IP类型（IPv4/IPv6）
        const ipTypeElement = document.getElementById('ipType');
        if (data.ip) {
            const isIPv6 = data.ip.includes(':');
            ipTypeElement.textContent = isIPv6 ? 'IPv6' : 'IPv4';
        } else {
            ipTypeElement.textContent = '获取失败';
        }

        // 更新位置信息
        const locationElement = document.getElementById('location');
        const city = data.city;
        const region = data.region;
        if (city || region) {
            locationElement.textContent = [region, city]
                .filter(Boolean)
                .join(' · ');
        } else {
            locationElement.textContent = '获取失败';
        }
        locationElement.classList.remove('loading');

        // 获取天气（使用API返回的位置，如果获取不到则不请求天气）
        if (city) {
            fetchWeather(city, data.country_code || 'CN');
        } else {
            document.getElementById('weatherIcon').textContent = '获取失败';
            document.getElementById('weatherTemp').textContent = '获取失败';
            document.getElementById('weatherDesc').textContent = '位置信息不可用';
        }

    } catch (error) {
        console.error('获取 IP 失败:', error);
        // 获取失败时不使用默认值
        document.getElementById('ipAddress').textContent = '获取失败';
        document.getElementById('isp').textContent = '获取失败';
        document.getElementById('ipType').textContent = '获取失败';

        const locationElement = document.getElementById('location');
        locationElement.textContent = '获取失败';
        locationElement.classList.remove('loading');

        // 天气也显示为获取失败
        document.getElementById('weatherIcon').textContent = '获取失败';
        document.getElementById('weatherTemp').textContent = '获取失败';
        document.getElementById('weatherDesc').textContent = '位置信息不可用';
    }
}

// ===== 一言 =====

async function fetchHitokoto() {
    try {
        const response = await fetch(API.hitokoto);
        const data = await response.json();

        document.getElementById('hitokotoLoading').style.display = 'none';
        document.getElementById('hitokotoContent').style.display = 'block';
        document.getElementById('hitokotoText').textContent = data.hitokoto;
        document.getElementById('hitokotoFrom').textContent =
            `${data.from} ${data.from_who ? '(' + data.from_who + ')' : ''}`;
    } catch (error) {
        console.error('获取一言失败:', error);
        document.getElementById('hitokotoLoading').textContent = '获取一言失败 (｡•́︿•̀｡)';
    }
}

// ===== 每日60s新闻 =====

async function fetchNews() {
    const newsList = document.getElementById('newsList');
    const newsDate = document.getElementById('newsDate');

    try {
        const response = await fetch(API.news);
        const data = await response.json();

        if (data.code === 200 && data.data) {
            const newsData = data.data;
            const news = newsData.news || [];

            // 显示日期
            if (newsData.date) {
                newsDate.textContent = newsData.date;
            }

            // 显示新闻列表
            if (news.length > 0) {
                newsList.innerHTML = news.map((item, index) => {
                    const isHot = index < 3; // 前三条标为热点
                    const indexNum = (index + 1).toString().padStart(2, '0');
                    return `
                        <div class="news-item ${isHot ? 'hot' : ''}">
                            <span class="news-index">${indexNum}</span>
                            <span class="news-content">${item}</span>
                        </div>
                    `;
                }).join('');
            } else {
                newsList.innerHTML = '<div class="news-loading">暂无新闻</div>';
            }
        } else {
            newsList.innerHTML = '<div class="news-loading">获取新闻失败</div>';
        }
    } catch (error) {
        console.error('获取新闻失败:', error);
        newsList.innerHTML = '<div class="news-loading">新闻服务暂不可用</div>';
    }
}

// ===== 初始化 =====

fetchIpInfo();
fetchHitokoto();
fetchNews();
