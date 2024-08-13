import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite';

export default defineUserConfig({
  head: [['link', { rel: 'icon', href: '/TONEX.png' }]],  
  description: "Host only Mod for Among Us, forked from Town Of Next",
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'TONEX官方网站',
      description: 'Host only Mod for Among Us, forked from Town Of Next',
    },/*
    '/en/': {
      lang: 'en-US',
      title: 'TownOfNewEpic_Xtreme',
      description: 'Host only Mod for Among Us, forked from Town Of Next',
    },*/
  },
  bundler: viteBundler(),
  theme: recoTheme({
    primaryColor: '#5eccff',
    repo: 'XtremeWave/TownOfNewEpic_XtremeSite',
    docsRepo: 'https://github.com/XtremeWave/TownOfNewEpic_XtremeSite',
    docsBranch: 'main',
    style: "@vuepress-reco/style-default",
    logo: "TONEX.png",
    author: "XtremeWave",
    authorAvatar: "XtremeWave.png",
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        editLinkText: '在GitHub上编辑此页',
        lastUpdatedText: '最近(在GitHub)更新于:',
        selectLanguageAriaLabel: '语言',
        selectLanguageText: '语言',
        backToHome: '返回首页',
        toggleColorMode: '颜色模式',
        catalogTitle: '目录',
        home: '/index.md',
        navbar: [
          { text: '首页', link: '/', icon: 'Home' },
          { text: '关于', link: '/about', icon: 'Quotes' },
          { text: '指南', link: '/guide', icon: 'Compass' },
          { text: '下载', link: 'https://www.xtreme.net.cn/download/tonex/release', icon: 'Download' },
          //{ text: '职业', link: 'https://docs.tonex.cc', icon: 'UserProfile' },
          { text: '疑难', link: '/FAQ', icon: 'Query' },
        ],
        bulletin: {
          body: [
            { type: 'title', content: 'QingFeng将于2025年停止服务' },
            {
              type: 'text',
              content: '因未来规划调整,我们将在2025年停止对XtremeWave的云服务支持。',
              style: 'font-size: 14px;'
            },
            { type: 'hr' },
            {
              type: 'buttongroup',
              children: [
                { text: '赞赏', link: 'https://afdian.com/a/aumodsite' },
              ],
            },
          ],
        },
      },
      /*'/en/': {
        selectLanguageName: 'English',
        editLinkText: 'Edit this page on Github',
        lastUpdatedText: 'Last Updated:',
        selectLanguageAriaLabel: 'Language',
        selectLanguageText: 'Language',
        backToHome: 'Go Home',
        home: '/en/index.md',
        navbar: [
          { text: 'Home', link: '/en/', icon: 'Home' },
          { text: 'About', link: '/en/about', icon: 'Quotes' },
          { text: 'Download', link: '/en/download', icon: 'Download' },
          //{ text: 'Role', link: 'https://docs.tonex.cc/en/', icon: 'UserProfile' },
        ],
        bulletin: {
          body: [
            { type: 'title', content: 'Website is BACK NOW!' },
            {
              type: 'text',
              content: 'WE GO BACK NOW!',
            },
          ],
        },
      },*/
    },
  }),
});