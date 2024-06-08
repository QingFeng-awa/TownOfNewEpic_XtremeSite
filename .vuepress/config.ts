import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { Xicon } from '@carbon/icons-react';

export default defineUserConfig({
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', href: 'https://cn-sy1.rains3.com/xtremewave/TONEX.jpg' }]],  
  title: 'TONEX官方网站',
  description: "Host only Mod for Among Us, forked from Town Of Next",
  bundler: viteBundler(),
  theme: recoTheme({
    home: '/index.md',
    primaryColor: '#5eccff',
    catalogTitle: '目录',
    repo: 'XtremeWave/TownOfNewEpic_XtremeSite',
    docsRepo: 'https://github.com/XtremeWave/TownOfNewEpic_XtremeSite',
    docsBranch: 'main',
    style: "@vuepress-reco/style-default",
    logo: "https://cn-sy1.rains3.com/xtremewave/TONEX.jpg",
    author: "XtremeWave",
    authorAvatar: "https://cn-sy1.rains3.com/xtremewave/XtremeWave.png",
    navbar: [
      {text: '首页', link: '/'},
      {text: '关于', link: '/about'},
      {text: '教程', link: '/tutorial'},
      {text: '下载', link: '/download'},
      {text: '职业',
        children: [
          { text: '船员职业', link: '/' },
          { text: '内鬼职业', link: '/Impostor/' },
          { text: '中立职业', link: '/' },
          { text: '附加职业', link: '/' },
        ],
      },
      {text: '疑难', link: '/FAQ'},
    ],
    series: {
      '/Impostor/': [ '/Impostor/BountyHunter','/Impostor/Mare','/Impostor/Fireworker','/Impostor/SerialKiller' ],
    },
    bulletin: {
      body: [
        { type: 'title', content: 'XtremeWave网站开发招募' },
        {
          type: 'text',
          content: `若您想要加入我们,在您阅读完<a href="https://www.xtreme.net.cn/933187.html">'加入XtremeWave'</a>文章后,请联系QingFeng。`,
          style: 'font-size: 12px;'
        },
        { type: 'hr' },
        {
          type: 'buttongroup',
          children: [
            { text: '赞赏', link: '/donate' },
          ],
        },
      ],
    },
    //commentConfig: {
    //  type: 'valine',
    //  options: {
    //    appId: 'xxx',
    //    appKey: 'xxx',
    //    placeholder: '填写邮箱可以收到回复提醒哦！',
    //    verify: true,
    //    notify: true,
    //    recordIP: true,
    //    hideComments: true
    //  },
    //}, 
  }),
});