import comp from "D:/Mine/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"lang\":\"zh-CN\",\"heroImage\":\"/assets/img/logo.png\",\"actions\":[{\"text\":\"Get Started\",\"link\":\"/get-started.html\",\"type\":\"primary\"},{\"text\":\"Introduction\",\"link\":\"./.vuepress/asset/icon.png\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"Simplicity First\",\"details\":\"Minimal setup with markdown-centered project structure helps you focus on writing.\"},{\"title\":\"Vue-Powered\",\"details\":\"Enjoy the dev experience of Vue, use Vue components in markdown, and develop custom themes with Vue.\"},{\"title\":\"Performant\",\"details\":\"VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.\"},{\"title\":\"Themes\",\"details\":\"Providing a default theme out of the box. You can also choose a community theme or create your own one.\"},{\"title\":\"Plugins\",\"details\":\"Flexible plugin API, allowing plugins to provide lots of plug-and-play features for your site.\"},{\"title\":\"Bundlers\",\"details\":\"Default bundler is Vite, while Webpack is also supported. Choose the one you like!\"}],\"footer\":\"MIT Licensed | Copyright © 2018-present VuePress Community\"},\"git\":{\"updatedTime\":1754980538000,\"contributors\":[{\"name\":\"linyanshan\",\"username\":\"linyanshan\",\"email\":\"1294254846@qq.com\",\"commits\":1,\"url\":\"https://github.com/linyanshan\"}],\"changelog\":[{\"hash\":\"5ab497d4cc031757d2a4bf1e1ae0d21e4c59af69\",\"time\":1754980538000,\"email\":\"1294254846@qq.com\",\"author\":\"linyanshan\",\"message\":\"chore:【vuepress】初始化项目\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
