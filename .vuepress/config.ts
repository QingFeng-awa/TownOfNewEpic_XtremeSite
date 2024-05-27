import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { Xicon } from '@carbon/icons-react';

export default defineUserConfig({
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', href: 'https://cn-sy1.rains3.com/xtremewave/TONEX.jpg' }]],  
  title: 'TownOfNewEpic_Xtreme',
  description: "Host only Mod for Among Us, forked from Town Of Next",
  bundler: viteBundler(),
  // bundler: webpackBundler(),
  theme: recoTheme({
    repo: 'XtremeWave/TownOfNewEpic_XtremeSite',
    docsRepo: 'https://github.com/XtremeWave/TownOfNewEpic_XtremeSite',
    docsBranch: 'main',
    style: "@vuepress-reco/style-default",
    logo: "https://cn-sy1.rains3.com/xtremewave/TONEX.jpg",
    author: "XtremeWave",
    authorAvatar: "/head.png",
    navbar: [
      {text: '首页', link: '/'},
      {text: '关于', link: '/about'},
      {text: '教程', link: '/tutorial'},
      {text: '下载', link: '/download'},
      {text: '疑难', link: '/FAQ'},
    ],
    bulletin: {
      body: [
        {
          type: "text",
          content: `TONEX官方网站尚未完善职业文档。<br>
          我们将尽快完成职业文档,感谢您的理解。`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "buttongroup",
          children: [
            {
              text: "赞助",
              link: "https://www.xtreme.net.cn/donate",
            },
          ],
        },
      ],
    },
    // commentConfig: {
    //   type: 'valine',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // }, 
  }),
});