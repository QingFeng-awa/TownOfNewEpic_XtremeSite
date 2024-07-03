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
      //{text: '预设', link: '/Config/default.html'},
      //{text: '职业',
      //  children: [
      //    { text: '船员职业', link: '/Role/' },
      //    { text: '内鬼职业', link: '/Role/Impostor/' },
      //    { text: '中立职业', link: '/Role/' },
      //    { text: '附加职业', link: '/Role/' },
      //  ],
      //},
      {text: '疑难', link: '/FAQ'},
      {text: '服务状态', link: 'https://status.qingfengawa.me/status/xtremewave'},
    ],
    series: {
      '/Role/Impostor/': [ '/Role/Impostor/BountyHunter','/Role/Impostor/Mare','/Role/Impostor/Fireworker','/Role/Impostor/SerialKiller' ],
      '/Config/': [ '/Config/default'],
    },
    bulletin: {
      body: [
        { type: 'title', content: '车队姬无限期延期上线的通知' },
        {
          type: 'text',
          content: `因QingFeng个人原因,QingFeng决定将车队姬无限期延期上线。`,
          style: 'font-size: 14px;'
        },
        { type: 'hr' },
        { type: 'title', content: '官方群聊被封禁' },
        {
          type: 'text',
          content: `由于TONEX官方群聊被证实发送发动言论,官群现已被腾讯封禁。<br>请等待新官群,感谢您的配合。`,
          style: 'font-size: 14px;'
        },
        { type: 'hr' },
        { type: 'title', content: '不要更新Among Us至2024.6.18' },
        {
          type: 'text',
          content: `由于模组以及私服尚不支持2024.6.18,请不要更新最新版Among Us。<br>这会导致你无法加入XW私服以及使用TONEX模组。<br>由于此次改动代码超过80%,我们的适配可能需要<strong>长达1周</strong>。`,
          style: 'font-size: 14px;'
        },
        { type: 'hr' },
        { type: 'title', content: 'XtremeWave网站开发招募' },
        {
          type: 'text',
          content: `若您想要加入我们,在您阅读完<a href="https://www.xtreme.net.cn/933187.html">'加入XtremeWave'</a>文章后,请联系QingFeng。`,
          style: 'font-size: 14px;'
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
