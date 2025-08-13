import { defineClientConfig } from "vuepress/client";
import Article from "./layouts/Article.vue";
import Category from "./layouts/Category.vue";
import Tag from "./layouts/Tag.vue";
import Timeline from "./layouts/Timeline.vue";
import CustomLayout from "./layouts/CustomLayout.vue";

// 引入样式文件
import "./styles/index.scss";

export default defineClientConfig({
  // enhance({ app }) {
  //   // 添加自定义CSS
  //   const style = document.createElement("style");
  //   style.textContent = `
  //     /* 主页背景样式 */
  //     .vp-home {
  //       background: linear-gradient(135deg, #acf390ff 0%, #764ba2 100%);
  //       min-height: 100vh;
  //       //  background-image: url('./assets/img/background.jpg');
  //       // background-size: cover;
  //       // background-position: center;
  //       // background-repeat: no-repeat;
  //       // min-height: 100vh;
  //     }

  //     // /* 或者使用纯色背景 */
  //     // /* .home {
  //     //   background-color: #f5f5f5;
  //     //   min-height: 100vh;
  //     // } */

  //     /* 或者使用图片背景 */
  //      .vp-home {
  //       background-image: url('/assets/img/background.jpg');
  //       background-size: cover;
  //       background-position: center;
  //       background-repeat: no-repeat;
  //       min-height: 100vh;
  //     }

  //     /* 调整主页内容样式以适应背景 */
  //     .home .hero {
  //       background: rgba(255, 255, 255, 0.1);
  //       backdrop-filter: blur(10px);
  //       border-radius: 15px;
  //       padding: 2rem;
  //       margin: 2rem 0;
  //     }

  //     .home .features {
  //       background: rgba(255, 255, 255, 0.1);
  //       backdrop-filter: blur(10px);
  //       border-radius: 15px;
  //       padding: 2rem;
  //       margin: 2rem 0;
  //     }
  //   `;
  //   document.head.appendChild(style);
  // },
  // we provide some blog layouts
  layouts: {
    Article,
    Category,
    Tag,
    Timeline,
    CustomLayout,
  },
});
