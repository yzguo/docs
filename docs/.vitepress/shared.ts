import { defineConfig } from 'vitepress'

export const shared = defineConfig({
    lastUpdated: true,
    cleanUrls: true,
    metaChunk: true,

    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/profile-pic.svg' }],
        ['link', { rel: 'icon', type: 'image/png', href: '/profile-pic.png' }],
        ['meta', { name: 'theme-color', content: '#5f67ee' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:site_name', content: 'Yanzhen Guo\'s Documentation Site' }],
        ['meta', { property: 'og:title', content: 'Yanzhen Guo\'s Documentation Site | Documentation' }],
        ['meta', { property: 'og:image', content: 'https://vitepress.dev/vitepress-og.jpg' }],
        ['meta', { property: 'og:image:width', content: '640' }],
        ['meta', { property: 'og:image:height', content: '640' }],
        ['meta', { property: 'og:url', content: 'https://vitepress.dev/' }],
        [
            'script',
            {
                src: 'https://cdn.usefathom.com/script.js',
                'data-site': 'AZBRSFGG',
                'data-spa': 'auto',
                defer: ''
            }
        ]
    ],
    
    themeConfig: {
        logo: { src: '/profile-pic.jpg', width: 24, height: 24 },

        socialLinks: [
            { icon: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 22 20" fill="currentColor"><path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4ZM20 8.234L12 13.5L4 8.234V6.5L12 11.766L20 6.5V8.234Z"/></svg>'
            }, 
            link: 'mailto:yzhguo@ustc.edu',
            ariaLabel: 'Email'
          },
            { icon: 'telegram', link: 'https://t.me/guoyz' },
            { icon: 'github', link: 'https://github.com/yzguo' }
        ],
    
        search: {
            provider: 'local'
        }
    }
})