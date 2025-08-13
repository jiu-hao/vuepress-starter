export const siteData = JSON.parse("{\"base\":\"/vuepress-starter/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"blog\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"./assets/favicon.ico\"}],[\"link\",{\"rel\":\"stylesheet\",\"href\":\"./styles/index.scss\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
