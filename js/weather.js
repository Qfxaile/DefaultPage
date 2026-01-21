/**
 * 天气相关功能
 */

// 根据天气代码返回对应的 emoji 图标
function getWeatherIcon(code) {
    const weatherIcons = {
        '113': '☀️', // 晴
        '116': '⛅', // 多云
        '119': '☁️', // 阴
        '122': '☁️',
        '176': '🌧️', // 阵雨
        '179': '🌨️', // 阵雪
        '182': '🌨️',
        '185': '🌨️',
        '200': '⛈️', // 雷阵雨
        '227': '🌨️', // 雪
        '230': '🌨️',
        '248': '🌫️', // 雾
        '260': '🌫️',
        '263': '🌧️', // 毛毛雨
        '266': '🌧️',
        '281': '🌧️',
        '284': '🌧️',
        '293': '🌧️',
        '296': '🌧️', // 小雨
        '299': '🌧️', // 中雨
        '302': '🌧️', // 大雨
        '305': '🌧️',
        '308': '🌧️',
        '353': '🌧️',
        '356': '🌧️',
        '359': '🌧️',
        '377': '🌨️',
        '386': '⛈️',
        '389': '⛈️',
        '392': '🌨️',
        '395': '🌨️',
    };
    return weatherIcons[code] || '🌤️';
}

// 获取天气信息
async function fetchWeather(city, countryCode = 'CN') {
    try {
        // 使用 wttr.in 获取天气（免费，无需 API key）
        const query = encodeURIComponent(`${city},${countryCode}`);
        const response = await fetch(`${API.weather}${query}?format=j1`);
        const data = await response.json();

        const current = data.current_condition[0];

        // 更新天气显示（新的两列样式）
        const weatherIcon = getWeatherIcon(current.weatherCode);
        document.getElementById('weatherIcon').textContent = weatherIcon;
        document.getElementById('weatherTemp').textContent = `${current.temp_C}°C`;
        document.getElementById('weatherDesc').textContent =
            `${current.weatherDesc[0].value}`;
    } catch (error) {
        console.error('获取天气失败:', error);
        document.getElementById('weatherIcon').textContent = '获取失败';
        document.getElementById('weatherTemp').textContent = '获取失败';
        document.getElementById('weatherDesc').textContent = '获取失败';
    }
}
