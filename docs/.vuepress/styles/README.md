# VuePress 样式文件使用说明

## 文件结构

```
docs/.vuepress/styles/
├── index.scss          # 主要样式文件
├── palette.scss        # 调色板样式文件（CSS变量）
└── README.md          # 本说明文件
```

## 样式文件引入方式

### 1. 通过 client.js 引入（推荐）

在 `docs/.vuepress/client.js` 中添加：

```javascript
import "./styles/index.scss";
```

### 2. 通过配置文件引入

在 `docs/.vuepress/config.js` 中添加：

```javascript
head: [["link", { rel: "stylesheet", href: "./styles/index.scss" }]];
```

### 3. 自动加载

- `palette.scss` 文件会被 VuePress 自动加载
- 用于定义 CSS 变量和主题颜色

## 样式文件说明

### index.scss

- 主要样式文件
- 包含主页背景、布局、响应式设计等样式
- 使用 CSS 变量实现主题定制

### palette.scss

- 调色板文件
- 定义 CSS 变量
- 用于主题颜色管理

## 自定义样式

### 修改背景颜色

在 `palette.scss` 中修改：

```scss
:root {
  --home-bg-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### 修改文字颜色

在 `index.scss` 中修改：

```scss
.home .hero h1 {
  color: white;
}
```

### 添加新样式

在 `index.scss` 中添加新的 CSS 规则。

## 注意事项

1. 样式文件修改后需要重启开发服务器
2. 使用 CSS 变量便于主题切换
3. 注意样式的优先级和覆盖关系
4. 建议使用响应式设计
