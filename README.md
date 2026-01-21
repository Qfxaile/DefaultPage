# Default Landing Page

> 泛域名解析的默认欢迎页面

## 项目用途

当域名已成功解析到服务器，但尚未配置具体网站服务时显示此页面。

**典型场景**：泛域名解析（如 `*.example.com`）的兜底页面，用于提示访问者域名已解析但站点尚未配置。

## 页面展示

PC界面展示

<img width="2560" height="1440" alt="image" src="https://github.com/user-attachments/assets/103dbe73-51ad-4a1e-a9ec-b0dc7ff09adb" />



移动端界面展示
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



## 修改配置

所有配置集中在 `js/config.js` 文件中：

```javascript
// API 配置
const API = {
    ipInfo: 'https://ipapi.co/json/',      // IP地址
    hitokoto: 'https://v1.hitokoto.cn/...', // 一言
    news: 'https://60s.viki.moe/v2/60s',    // 每日新闻
    weather: 'https://wttr.in/',            // 天气
};

// 资源配置
const RESOURCES = {
    qqAvatar: 'https://q.qlogo.cn/...',    // QQ头像
    bgPC: '/img/bg-pc.png',                // PC端背景
    bgAndroid: '/img/bg-android.jpg',      // 移动端背景
};
```

### 常见修改项

| 需求 | 修改位置 |
|-----|---------|
| 更换QQ头像 | `RESOURCES.qqAvatar` 中的 `dst_uin` 参数 |
| 更换背景图 | `RESOURCES.bgPC` / `RESOURCES.bgAndroid` |
| 修改固定位置显示 | `js/api.js` 中的 `defaultLocation` |
| 更改API端点 | `API` 对象中对应项 |

## 部署

将整个目录部署到 Nginx/Apache 的默认根目录即可。

## 技术栈

纯 HTML + CSS + JavaScript，无构建工具，无依赖。
