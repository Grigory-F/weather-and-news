module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/weather-and-news/'
    : '/',
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                @import "@/assets/styles/_core.scss";
                `,
            }
        }
    },
};

