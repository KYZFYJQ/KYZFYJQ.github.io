import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://valaxy.site/',
  lang: 'zh-CN',
  title: 'KYZFYJQ的小站',
  subtitle: 'Stay foolish, stay hungry',
  author: {
    name: 'KYZFYJQ',
    avatar: 'https://img.cdn1.vip/i/68b9ad963e7fc_1756999062.webp',
    status:{
      emoji: '',
    },
  },
  description: '我喜欢你',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'QQ 群 564136613',
      link: 'https://qm.qq.com/cgi-bin/qm/qr?k=e45Uz81Bs05EnsDMJJp05qZlxQvs6rSx&jump_from=webapi&authKey=yC+0rT6FDApkSKGPhKKISS0X4L9HLP4uUNQT5AIXE2/NrU0p2tm0ptAMyGWF+3Qn',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: 'QQ 2561624548',
      link: 'https://user.qzone.qq.com/2561624548/infocenter',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/KYZFYJQ',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '知乎',
      link: 'https://www.zhihu.com/people/75-63-15-83',
      icon: 'i-ri-zhihu-line',
      color: '#0084FF',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/3546945635223740?spm_id_from=333.1007.0.0',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'Travelling',
      link: 'https://www.travellings.cn/go.html',
      icon: 'i-ri-train-line',
      color: 'var(--va-c-text)',
    },
  ],

  search: {
    enable: false,
  },

  sponsor: {
    enable: true,
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: '支付宝',
        url: 'https://cdn.yunyoujun.cn/img/donate/alipay-qrcode.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/qqpay-qrcode.png',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/wechatpay-qrcode.jpg',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})
