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
    const apis = API.weather;

    /**
     * 尝试从 wttr.in 获取天气
     */
    async function tryWttrIn() {
        const query = encodeURIComponent(`${city},${countryCode}`);
        const response = await fetch(`${API.weather.find(a => a.name === 'wttr').url}${query}?format=j1`, {
            signal: AbortSignal.timeout(5000)
        });
        const data = await response.json();

        const current = data.current_condition[0];

        return {
            icon: getWeatherIcon(current.weatherCode),
            temp: `${current.temp_C}°C`,
            desc: current.weatherDesc[0].value
        };
    }

    /**
     * 尝试从 Open-Meteo 获取天气
     */
    async function tryOpenMeteo() {
        // 需要先获取城市的经纬度
        const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=zh&format=json`;
        const geoResponse = await fetch(geoUrl, {
            signal: AbortSignal.timeout(5000)
        });
        const geoData = await geoResponse.json();

        if (!geoData.results || geoData.results.length === 0) {
            return null;
        }

        const { latitude, longitude } = geoData.results[0];

        // 获取天气
        const weatherUrl = `${API.weather.find(a => a.name === 'openmeteo').url}?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
        const weatherResponse = await fetch(weatherUrl, {
            signal: AbortSignal.timeout(5000)
        });
        const weatherData = await weatherResponse.json();

        const current = weatherData.current_weather;

        // Open-Meteo 使用 WMO 代码，需要映射到我们的图标
        const weatherCodeMap = {
            0: '113',   // 晴
            1: '116',   // 主要晴
            2: '116',   // 多云
            3: '119',   // 阴
            45: '248',  // 雾
            48: '248',  // 雾
            51: '266',  // 毛毛雨
            53: '266',  // 毛毛雨
            55: '266',  // 毛毛雨
            61: '296',  // 小雨
            63: '299',  // 中雨
            65: '302',  // 大雨
            66: '281',  // 冻雨
            67: '281',  // 冻雨
            71: '179',  // 小雪
            73: '182',  // 中雪
            75: '185',  // 大雪
            77: '227',  // 雪粒
            80: '296',  // 阵雨
            81: '299',  // 阵雨
            82: '302',  // 暴雨
            85: '179',  // 阵雪
            86: '182',  // 阵雪
            95: '200',  // 雷暴
            96: '386',  // 雷暴伴冰雹
            99: '389',  // 雷暴伴冰雹
        };

        const code = weatherCodeMap[current.weathercode] || '113';

        return {
            icon: getWeatherIcon(code.toString()),
            temp: `${current.temperature}°C`,
            desc: getWeatherDesc(current.weathercode)
        };
    }

    /**
     * 根据 WMO 代码获取天气描述
     */
    function getWeatherDesc(code) {
        const descriptions = {
            0: '晴',
            1: '晴',
            2: '多云',
            3: '阴',
            45: '雾',
            48: '雾',
            51: '毛毛雨',
            53: '毛毛雨',
            55: '毛毛雨',
            61: '小雨',
            63: '中雨',
            65: '大雨',
            66: '冻雨',
            67: '冻雨',
            71: '小雪',
            73: '中雪',
            75: '大雪',
            77: '雪粒',
            80: '阵雨',
            81: '阵雨',
            82: '暴雨',
            85: '阵雪',
            86: '阵雪',
            95: '雷暴',
            96: '雷暴伴冰雹',
            99: '雷暴伴大冰雹',
        };
        return descriptions[code] || '未知';
    }

    /**
     * 更新天气显示
     */
    function updateWeather(data) {
        document.getElementById('weatherIcon').textContent = data.icon;
        document.getElementById('weatherTemp').textContent = data.temp;
        document.getElementById('weatherDesc').textContent = data.desc;
    }

    /**
     * 显示天气获取失败状态
     */
    function showWeatherError() {
        document.getElementById('weatherIcon').textContent = '获取失败';
        document.getElementById('weatherTemp').textContent = '获取失败';
        document.getElementById('weatherDesc').textContent = '获取失败';
    }

    // 依次尝试各个天气 API
    for (let i = 0; i < apis.length; i++) {
        try {
            let data;
            if (apis[i].name === 'wttr') {
                data = await tryWttrIn();
            } else if (apis[i].name === 'openmeteo') {
                data = await tryOpenMeteo();
            }

            if (data) {
                console.log(`天气获取成功 (API ${i + 1}/${apis.length}: ${apis[i].name})`);
                updateWeather(data);
                return;
            }
        } catch (error) {
            console.error(`${apis[i].name} 天气 API 失败:`, error);
            continue;
        }
    }

    console.error('所有天气 API 均失败');
    showWeatherError();
}
