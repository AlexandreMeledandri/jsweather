module.exports = {
    runtimeCompiler: false,

    chainWebpack: config =>{
        const svgRule = config.module.rule('svg')
        svgRule.uses.clear()
        svgRule
            .use('vue-svg-loader')
                .loader('vue-svg-loader')
    },


    devServer: {
        proxy: {
            '/data/2.5': {
                target: 'http://api.openweathermap.org/',
                ws: true,
                changeOrigin: true
            }
        }
    }
}