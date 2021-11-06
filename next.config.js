const withPWA = require("next-pwa");
// module.exports = {
//     i18n: {
//         locales: ['en', 'es'],
//         defaultLocale: 'en',
//         domains: [
//             {
//                 domain: 'dev-cordenadas.xyz',
//                 defaultLocale: 'en',
//                 http: true,
//                 localeDetection: false,
//             },
//         ],
//     },
// }
module.exports = withPWA({
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
    },
    i18n: {
        locales: ['en', 'es'],
        defaultLocale: 'en',
        domains: [
            {
                domain: 'dev-cordenadas.xyz',
                defaultLocale: 'en',
                http: true,
                localeDetection: false,
            },
        ],
    },
});