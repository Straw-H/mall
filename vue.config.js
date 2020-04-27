module.exports = {
    devServer: {
<<<<<<< HEAD
        port: 80, // 端口号
=======
        // port: 80, // 端口号
>>>>>>> 2fa94f5705d0299da9d144bacb0e40f29efae2de
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
