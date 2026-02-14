import { defineConfig, type DefaultTheme } from 'vitepress'

export const en_us = defineConfig({
    title: "Docs",
    description: "My personal documentation site built with VitePress.",
    
    themeConfig: {
        nav: nav(),

        sidebar: {
            '/introduction/': { base: '/introduction/', items: sidebarIntroduction() },
            '/docs/': { base: '/docs/', items: sidebarDocs() },
            '/faqs/': { base: '/faqs/', items: sidebarFaqs() }
        },

        editLink: {
            pattern: 'https://github.com/yzguo/docs/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },

        footer: {
            message: 'Released under the GPL-3.0 License.',
            copyright: `Copyright © 2025 - ${new Date().getFullYear()} <a href="https://github.com/yzguo" target="_blank">Yanzhen Guo</a> All Rights Reserved.`
        },

        docFooter: {
            prev: '← Previous page',
            next: 'Next page →'
        }
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: 'Introduction',
            link: '/introduction/intro1',
            activeMatch: '/introduction/'
        },
        {
            text: 'Docs',
            link: '/docs/doc1',
            activeMatch: '/docs/'
        },
        {
            text: 'Faqs',
            link: '/faqs/faq1',
            activeMatch: '/faqs/'
        }
    ]
}

function sidebarIntroduction(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: "Introduction",
            collapsed: false,
            items: [
                { text: '111', link: 'intro1' },
                { text: '222', link: 'intro2' }
            ]
        },
        {
            text: "Pages",
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
            text: 'Docs',
            collapsed: false,
            items: [
                { text: '111', link: 'doc1' },
                { text: '222', link: 'doc2' }
            ]
        },
        {
            text: 'Create Office ISO',
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
            text: 'Faqs',
            collapsed: false,
            items: [
                { text: '111', link: 'faq1' },
                { text: '222', link: 'faq2' }
            ]
        }
    ]
}
