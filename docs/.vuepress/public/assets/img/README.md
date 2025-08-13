# 背景图片说明

如果您想使用图片作为主页背景，请将您的背景图片放在这个目录下，然后：

1. 将图片命名为 `background.jpg`（或修改 CSS 中的文件名）
2. 在 `docs/.vuepress/styles/index.scss` 中取消注释图片背景相关的 CSS 代码
3. 注释掉渐变背景的代码

## 推荐的图片规格：

- 格式：JPG、PNG、WebP
- 尺寸：1920x1080 或更大
- 文件大小：建议小于 2MB 以保证加载速度

## 示例 CSS 代码：

```scss
.home {
  background-image: url("/assets/img/background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
}
```
