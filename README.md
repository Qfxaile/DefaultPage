# 个人主页

> 一个简洁美观的个人主页，包含个人资料、网站导航、时间天气、每日新闻等功能。

## 项目概述

这是一个单页面个人主页，采用三栏布局设计：
- **左栏**：个人头像、简介、社交平台、网站导航
- **中栏**：实时时间、天气信息、IP地址、一言
- **右栏**：每日60s新闻

支持深色模式切换，响应式设计适配 PC 和移动端。

## 页面展示

### PC 界面

<img width="2560" height="1440" alt="PC界面" src="https://github.com/user-attachments/assets/103dbe73-51ad-4a1e-a9ec-b0dc7ff09adb" />

### 移动端界面

<table>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/99169fea-5632-4e67-af86-1b9c7280a7df" width="200px" />
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/60148d92-2dce-4e99-8f2d-4495a8c53778" width="200px" />
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/6d13f188-79c7-453f-8e03-dc85bd0e9f87" width="200px" />
    </td>
  </tr>
</table>

## 主要功能

- 🌤️ 实时天气显示（基于 wttr.in）
- 📰 每日60s新闻
- 💬 一言/随机语录
- 🌙 深色模式切换
- 📱 响应式设计（PC/移动端自适应）
- ✨ 粒子动画背景效果

## 快速开始

### 修改个人资料

编辑 `js/profile.js` 文件中的 `HOME_CONFIG` 对象：

```javascript
const HOME_CONFIG = {
    profile: {
        qqNumber: '123456789',      // QQ号（自动生成头像）
        avatar: '',                  // 自定义头像URL（留空使用QQ头像）
        name: '你的名字',
        tagline: '一句标语',
        bio: '详细介绍...',
    },
    contacts: [
        { name: 'GitHub', url: 'https://github.com/xxx', icon: 'github' },
        // 添加更多联系方式...
    ],
    websites: [
        { title: '博客', url: 'https://blog.example.com' },
        // 添加更多网站...
    ],
};
```

### 修改 URL 配置

编辑 `js/config.js` 文件修改 API 和资源 URL：

```javascript
// API 配置
const API = {
    ipInfo: 'https://ipapi.co/json/',
    hitokoto: 'https://v1.hitokoto.cn/',
    news: 'https://60s.viki.moe/v2/60s',
    weather: 'https://wttr.in/',
};

// 资源配置
const RESOURCES = {
    qqAvatar: 'https://q.qlogo.cn/g?b=qq&nk=123456&s=640',
    bgPC: '/img/background-PC.php',
    bgAndroid: '/img/background-Android.php',
};
```

## 项目结构

```
html/
├── index.html              # 主页面
├── css/
│   ├── reset.css           # 全局样式重置
│   ├── background.css      # 背景动画效果
│   ├── layout.css          # 三栏布局
│   ├── components.css      # 组件样式
│   ├── dark-mode.css       # 深色模式
│   └── responsive.css      # 响应式设计
└── js/
    ├── config.js           # URL 统一配置
    ├── profile.js          # 个人资料配置
    ├── time.js             # 时间显示
    ├── weather.js          # 天气功能
    ├── darkmode.js         # 深色模式
    ├── particles.js        # 粒子效果
    └── api.js              # API 请求
```

## 部署

将整个目录部署到 Web 服务器（Nginx/Apache）的根目录即可。

**注意事项**：
- 确保背景图片路径正确（`/img/background-*.php`）
- 如需更换背景图，修改 `js/config.js` 中的 `RESOURCES` 配置

## 技术栈

纯 HTML + CSS + JavaScript，无构建工具，无依赖。

- 布局：CSS Grid
- 特效：CSS 动画 + 粒子系统
- API：原生 Fetch API
