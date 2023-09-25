export default defineAppConfig({
  docus: {
    title: 'Yangood',
    description: '欢迎来到我的站点',
    image: 'favicon.ico',
    socials: {
      // twitter: 'nuxtstudio',
      // github: 'nuxt-themes/docus'
    },
    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'docus',
      owner: 'nuxt-themes',
      edit: false,
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },
    footer: {
      credits: {
        img: '',
        icon: 'svg-spinners:wind-toy',
        text: '顾固的生活纪事',
        href: 'https://yangood.top/',
      },
      textLinks: [
        {
          text: '闽公网安备35090202000355号',
          href: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=35090202000355'
        },
        {
          text: '闽ICP备2023009656号-1',
          href: 'https://beian.miit.gov.cn/'
        },
      ],
      iconLinks: [
        // {
        //   label: 'Powered by Docus',
        //   href: 'https://docus.dev',
        //   img: '/img/docus.png',
        //   icon: ''
        // },
        {
          label: 'dogyun',
          href: 'https://www.dogyun.com/?ref=dogyunyang',
          img: '/image/dogyun.png',
          icon: ''
        },
        // {
        //   href: 'tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=1978505627&website=www.oicqzone.com',
        //   label:'1978505627@qq.com',
        //   BiTencentQq: true,
        //   icon:''
        // },
        {
          href: 'tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=1978505627&website=www.oicqzone.com',
          label: '1978505627@qq.com',
          email: true,
          icon: ''
        }
      ]
    }
  }
})
