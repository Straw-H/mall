module.exports = {
  // baseUrl: './', //vue-cli3以下版本
  publicPath: './', // vue-cli3以上
  // publicPath: process.env.NODE_ENV === "production" ? "/mall" : "/",
    devServer: {
        port: 80, // 端口号
      // 需要内网穿透时配置
        disableHostCheck: true
    },
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'network': '@/network',
                'views': '@/views',
                'components': '@/components',
                'store' : '@/store'
            }
        }
    }
}
