import path from 'path';

const baseUrl = '/';

const alias = {
    primevue: path.resolve(__dirname, '../../packages/primevue/src'),
    '@primevue/core': path.resolve(__dirname, '../../packages/core/src'),
    '@primevue/icons': path.resolve(__dirname, '../../packages/icons/src')
};

let PROCESS_ENV = {};

try {
    PROCESS_ENV = process?.env || {};
} catch {
    // NOOP
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: false },
    modules: ['@primevue/nuxt-module'],
    components: [
        {
            path: '~/components',
            pathPrefix: false
        }
    ],
    vite: {
        optimizeDeps: {
            noDiscovery: true,
            include: ['quill', 'yup']
        },
        resolve: {
            dedupe: ['vue', '@primeuix/styles', '@primeuix/themes', '@primeuix/utils'],
            alias
        }
    },
    nitro: {
        alias
    },
    routeRules: {
        '/accessibility': { redirect: { to: '/guides/accessibility', statusCode: 301 } },
        '/installation': { redirect: { to: '/vite', statusCode: 301 } }
    },
    primevue: {
        autoImport: true, // When enabled, the module automatically imports PrimeVue components and directives used throughout the application.
        // importTheme: { from: '@/themes/app-theme.js' }
        // options: { theme: 'none' },
        options: {
          unstyled: true,
          ripple: true,
        },
        importPT: { from: path.resolve(__dirname, './presets/aura/') },
    },
    app: {
        baseURL: baseUrl,
        head: {
            title: 'PrimeVue - Vue UI Component Library',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'The ultimate collection of design-agnostic, flexible and accessible Vue UI Components.' },
                { name: 'robots', content: 'index,follow' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:site', content: '@primevue' },
                { name: 'twitter:title', content: 'PrimeVue | Vue UI Component Library' },
                { name: 'twitter:description', content: 'The ultimate collection of design-agnostic, flexible and accessible Vue UI Components.' },
                { property: 'og:type', content: 'website' },
                { property: 'og:title', content: 'PrimeVue | Vue UI Component Library' },
                { property: 'og:url', content: 'https://primevue.org/' },
                { property: 'og:description', content: 'The ultimate collection of design-agnostic, flexible and accessible Vue UI Components.' },
                { property: 'og:image', content: 'https://www.primefaces.org/static/social/primevue-preview.jpg' },
                { property: 'og:ttl', content: '604800' }
            ],
            link: [
                { rel: 'icon', href: baseUrl + 'favicon.ico' },
                { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
                {
                  rel: 'stylesheet',
                  href: 'https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap',
                },
            ],
            script: [
                {
                    src: baseUrl + 'scripts/prism.js',
                    'data-manual': true
                }
            ]
        }
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    runtimeConfig: {
        public: {
            contextPath: baseUrl,
            DEV_ENV: PROCESS_ENV.DEV_ENV,
            designerApiUrl: ''
        }
    },
    css: [
      'primeicons/primeicons.css',
      '@/assets/styles/flags.css',
      '@docsearch/css/dist/style.css',
      '@/assets/styles/tailwind/main.css',
      '@/assets/styles/layout/layout.scss',
      // ours
      '@/assets/padelata/_tw.css',
      '@/assets/padelata/base.scss',
      '@/assets/padelata/_fix.css',
    ]
});
