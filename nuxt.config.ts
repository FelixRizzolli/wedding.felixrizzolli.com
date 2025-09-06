// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },

    modules: ['@nuxt/image', '@nuxtjs/tailwindcss', 'nuxt-svgo'],

    svgo: {
        componentPrefix: 'i',
        autoImportPath: '~/assets/images/',
        customComponent: 'MyIcon',
        svgoConfig: {
            // multipass: true, // optimization will be applied until the result differs from the one obtained in the previous step
            plugins: [
                {
                    name: 'preset-default', //  default set of plugins, https://svgo.dev/docs/preset-default/#plugins-list
                    params: {
                        overrides: {
                            removeViewBox: false, // viewbox is required for svg to scale properly
                            mergePaths: false, // disable mergePaths to preserve all paths
                            collapseGroups: false, // disable collapseGroups to preserve groups
                        },
                    },
                },
                // additional plugins, https://svgo.dev/docs/plugins/
                'removeDimensions', // remove width and height attributes,
                'removeXMLNS', // remove xmlns attribute
            ],
        },
    },
});
