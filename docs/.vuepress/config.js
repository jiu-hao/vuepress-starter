import { blogPlugin } from "@vuepress/plugin-blog";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { webpackBundler } from "@vuepress/bundler-webpack";
// import { blog, hopeTheme } from "vuepress-theme-hope";
export default defineUserConfig({
  lang: "en-US",
  title: "",
  description: "blog",
  base: "/vuepress-starter/",
  bundler: webpackBundler(),

  // 引入全局样式文件
  alias: {
    "@": "/docs/.vuepress",
  },

  // 直接引入样式文件
  head: [
    ["link", { rel: "icon", href: "./assets/favicon.ico" }],
    ["link", { rel: "stylesheet", href: "./styles/index.scss" }],
  ],
  theme: defaultTheme({
    logo: "/assets/img/logo.png",
    navbar: [
      "/",
      {
        text: "Article",
        link: "/article/",
      },
      {
        text: "Category",
        link: "/category/",
      },
      {
        text: "Tag",
        link: "/tag/",
      },
      {
        text: "Timeline",
        link: "/timeline/",
      },
      {
        text: "github",
        link: "https://github.com/jiu-hao/vuepress-starter/settings/pages",
      },
    ],
    sidebar: [
      {
        text: "指南",
        link: "/zh/guide/README.md",
        icon: "lightbulb",
      },
      { text: "配置", link: "/zh/config/README.md", icon: "config" },
      {
        text: "常见问题",
        link: "/zh/faq.md",
        icon: "circle-question",
        // 会在 `/zh/faq` 开头的路径激活
        // 所以当你前往 `/zh/faq/xxx.html` 时也会激活
        activeMatch: "^/zh/faq",
      },
    ],
    theme: "vuepress-theme-hope",
  }),

  plugins: [
    blogPlugin({
      // Only files under posts are articles
      filter: ({ filePathRelative }) => (filePathRelative ? filePathRelative.startsWith("posts/") : false),

      // Getting article info
      getInfo: ({ frontmatter, title, data }) => ({
        title,
        author: frontmatter.author || "",
        date: frontmatter.date || null,
        category: frontmatter.category || [],
        tag: frontmatter.tag || [],
        excerpt:
          // Support manually set excerpt through frontmatter
          typeof frontmatter.excerpt === "string" ? frontmatter.excerpt : data?.excerpt || "",
      }),

      // Generate excerpt for all pages excerpt those users choose to disable
      excerptFilter: ({ frontmatter }) => !frontmatter.home && frontmatter.excerpt !== false && typeof frontmatter.excerpt !== "string",

      category: [
        {
          key: "category",
          getter: (page) => page.frontmatter.category || [],
          layout: "Category",
          itemLayout: "Category",
          frontmatter: () => ({
            title: "Categories",
            sidebar: false,
          }),
          itemFrontmatter: (name) => ({
            title: `Category ${name}`,
            sidebar: false,
          }),
        },
        {
          key: "tag",
          getter: (page) => page.frontmatter.tag || [],
          layout: "Tag",
          itemLayout: "Tag",
          frontmatter: () => ({
            title: "Tags",
            sidebar: false,
          }),
          itemFrontmatter: (name) => ({
            title: `Tag ${name}`,
            sidebar: false,
          }),
        },
      ],

      type: [
        {
          key: "article",
          // Remove archive articles
          filter: (page) => !page.frontmatter.archive,
          layout: "Article",
          frontmatter: () => ({
            title: "Articles",
            sidebar: false,
          }),
          // Sort pages with time and sticky
          sorter: (pageA, pageB) => {
            if (pageA.frontmatter.sticky && pageB.frontmatter.sticky) return pageB.frontmatter.sticky - pageA.frontmatter.sticky;

            if (pageA.frontmatter.sticky && !pageB.frontmatter.sticky) return -1;

            if (!pageA.frontmatter.sticky && pageB.frontmatter.sticky) return 1;

            if (!pageB.frontmatter.date) return 1;
            if (!pageA.frontmatter.date) return -1;

            return new Date(pageB.frontmatter.date).getTime() - new Date(pageA.frontmatter.date).getTime();
          },
        },
        {
          key: "timeline",
          // Only article with date should be added to timeline
          filter: (page) => page.frontmatter.date instanceof Date,
          // Sort pages with time
          sorter: (pageA, pageB) => new Date(pageB.frontmatter.date).getTime() - new Date(pageA.frontmatter.date).getTime(),
          layout: "Timeline",
          frontmatter: () => ({
            title: "Timeline",
            sidebar: false,
          }),
        },
      ],
      hotReload: true,
    }),
  ],
});
