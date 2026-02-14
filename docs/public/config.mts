import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Yanzhen Guo",
  description: "An undergraduate from University of Science and Technology of China (USTC) major in Physics.",
  base: '/',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/profile-pic.svg' }]
  ],

  themeConfig: {
    logo: '/profile-pic.jpg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blogs', link: '/blogs/blog-all' },
      { text: 'Resume', link: '/resume' },
      { text: 'Projects', link: '/projects/project-all' },
      { text: 'About Me', link: '/about' }
    ],

    sidebar: {
      '/blogs/' : [
        {
          text: 'Blogs',
          items: [
            { text: 'Blog 1', link: '/blogs/blog-1' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yzguo' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 22 20" fill="currentColor"><path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4ZM20 8.234L12 13.5L4 8.234V6.5L12 11.766L20 6.5V8.234Z"/></svg>'
        }, 
        link: 'mailto:yzhguo@mail.ustc.edu.cn',
        ariaLabel: 'Email'
      },
      { icon: 'telegram', link: 'https://t.me/guoyz' }
    ],

    footer: {
      copyright: 'Copyright © 2025 - present Yanzhen Guo'
    }
  }
})
