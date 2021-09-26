module.exports = {
    publicPath: '/weather-and-news/',
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

