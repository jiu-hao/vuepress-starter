import comp from "D:/Mine/vuepress-starter/docs/.vuepress/.temp/pages/posts/article10.html.vue"
const data = JSON.parse("{\"path\":\"/posts/article10.html\",\"title\":\"Article 10\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"2022-01-10T00:00:00.000Z\",\"category\":[\"Category A\",\"Category B\"],\"tag\":[\"tag C\",\"tag D\"]},\"git\":{\"updatedTime\":1754980538000,\"contributors\":[{\"name\":\"linyanshan\",\"username\":\"linyanshan\",\"email\":\"1294254846@qq.com\",\"commits\":1,\"url\":\"https://github.com/linyanshan\"}],\"changelog\":[{\"hash\":\"5ab497d4cc031757d2a4bf1e1ae0d21e4c59af69\",\"time\":1754980538000,\"email\":\"1294254846@qq.com\",\"author\":\"linyanshan\",\"message\":\"chore:【vuepress】初始化项目\"}]},\"filePathRelative\":\"posts/article10.md\",\"excerpt\":\"\\n<h2>Heading 2</h2>\\n<p>Here is the content.</p>\\n<h3>Heading 3</h3>\\n<p>Here is the content.</p>\\n\"}")
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
