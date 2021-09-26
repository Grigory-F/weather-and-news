module.exports = {
    publicPath: '/mevn-app/',
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

