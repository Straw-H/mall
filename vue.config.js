const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
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
    },
  /*configureWebpack: config => {
    require('vux-loader').merge(config, {
      options: {},
      plugins: ['vux-ui']
    })
  }*/
}
