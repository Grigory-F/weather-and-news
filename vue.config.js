module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/my-project/'
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

