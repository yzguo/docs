import { defineConfig, type DefaultTheme } from 'vitepress'

export const zh_cn = defineConfig({
    title: "文档",
    description: "郭彦禛的个人文档网站。",
    themeConfig: {
        nav: nav(),

        sidebar: {
            '/zh/introduction/': { base: '/zh/introduction/', items: sidebarIntroduction() },
            '/zh/docs/': { base: '/zh/docs/', items: sidebarDocs() },
            '/zh/faqs/': { base: '/zh/faqs/', items: sidebarFaqs() }
        },

        editLink: {
            pattern: 'https://github.com/yzguo/docs/edit/main/docs/:path',
            text: '在 GitHub 上编辑此页'
        },

        footer: {
            message: '基于 GPL-3.0 许可证发布。',
            copyright: `版权所有 © 2025 - ${new Date().getFullYear()} <a href="https://github.com/yzguo" target="_blank">郭彦禛</a> 保留所有权利。`
        },

        docFooter: {
            prev: '← 上一页',
            next: '下一页 →'
        },

        outline: {
            label: '页面目录'
        },

        lastUpdated: {
            text: '最后更新于',
        },
        
        notFound: {
          title: '页面未找到',
          quote: '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
          linkLabel: '前往首页',
          linkText: '带我回首页'
        },

        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        skipToContentLabel: '跳转到内容'
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: '介绍',
            link: '/zh/introduction/intro1',
            activeMatch: '/zh/introduction/'
        },
        {
            text: '文档',
            link: '/zh/docs/doc1',
            activeMatch: '/zh/docs/'
        },
        {
            text: '常见问题',
            link: '/zh/faqs/faq1',
            activeMatch: '/zh/faqs/'
        }
    ]
}

function sidebarIntroduction(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: "介绍",
            collapsed: false,
            items: [
                { text: '111', link: 'intro1' },
                { text: '222', link: 'intro2' }
            ]
        },
        {
            text: "页面",
            collapsed: false,
            items: [
                { text: '111', link: 'intro1' },
                { text: '222', link: 'intro2' }
            ]
        }
    ]
}

function sidebarDocs(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '文档',
            collapsed: false,
            items: [
                { text: '111', link: 'doc1' },
                { text: '222', link: 'doc2' }
            ]
        },
        {
            text: '创建 Office ISO',
            collapsed: false,
            items: [
                { text: '111', link: 'doc1' },
                { text: '222', link: 'doc2' }
            ]
        }
    ]
}

function sidebarFaqs(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '常见问题',
            collapsed: false,
            items: [
                { text: '111', link: 'faq1' },
                { text: '222', link: 'faq2' }
            ]
        }
    ]
}
