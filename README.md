# 智搜 - 生成式搜索中文应用

这是一个类似于Perplexity.ai的生成式搜索中文应用原型设计项目。该项目提供高保真的UI原型，可直接用于实际开发。

## 项目简介

智搜应用是一款结合了AI大模型能力的智能搜索工具，具有以下核心功能：

- **智能搜索**：利用AI生成高质量搜索结果
- **实时对话**：用户可以与AI助手进行连续对话
- **多模态输入**：支持文字、语音、图片输入
- **资源引用**：显示信息来源，保证结果可靠性
- **历史记录**：保存用户之前的查询
- **个性化设置**：用户偏好和界面定制

## 原型界面

项目包含以下主要界面：

1. **首页/搜索页**：核心功能入口，包含搜索框和推荐内容
2. **对话界面**：展示AI回答和参考来源，支持连续对话
3. **历史记录**：查看过去的搜索和对话
4. **收藏夹**：保存重要的搜索结果
5. **设置页面**：个性化定制和账号管理

## 技术栈

本项目原型使用以下技术实现：

- 原生HTML5
- CSS3（自定义样式）
- JavaScript（交互逻辑）
- Font Awesome（图标）
- 不依赖任何前端框架

## 开发指南

### 安装与运行

1. 克隆仓库
```bash
git clone https://github.com/用户名/xiaotuan.git
cd xiaotuan
```

2. 运行本地服务器
```bash
node server.js
```

3. 在浏览器中访问
```
http://localhost:3000
```

### 项目结构

```
public/
├── css/
│   └── main.css           # 主样式文件
├── js/
│   ├── components.js      # 公共组件
│   └── script.js          # 交互脚本
├── home.html              # 首页
├── chat.html              # 对话搜索页
├── history.html           # 历史记录页
├── collections.html       # 收藏页
├── settings.html          # 设置页
└── index.html             # 主入口（展示所有页面）
server.js                  # 简易服务器
```

## 真实开发建议

在基于本原型进行实际开发时，建议：

1. 使用React/Vue等前端框架重构，提高代码复用性和可维护性
2. 实现响应式设计，适配各种移动设备
3. 添加后端API接口对接，实现真实的搜索和数据存储功能
4. 集成实际的AI大模型服务，如OpenAI API等
5. 添加用户认证和数据安全措施
6. 优化性能，特别是在网络请求和界面渲染方面

## 贡献者

- 项目团队

## 许可证

MIT License 