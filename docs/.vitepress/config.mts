import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { en_us } from './en-us'
import { zh_cn } from './zh-cn'

export default defineConfig({
    ...shared,
    locales: {
        root: { label: 'English', lang: 'en-US', dir: 'ltr', ...en_us },
        zh: { label: '简体中文', lang: 'zh-CN', dir: 'ltr', ...zh_cn }
    }
})
