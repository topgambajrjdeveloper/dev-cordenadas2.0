const withPWA = require("next-pwa");

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
                domain: 'localhost:3000',
                defaultLocale: 'en',
                http: true,
                localeDetection: false,
            },
        ],
    },
});