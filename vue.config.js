module.exports = {
    devServer: {
        port: 80, // 端口号
    },
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'network': '@/network',
                'views': '@/views',
                'components': '@/components'
            }
        }
    }
}
