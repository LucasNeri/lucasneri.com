import path from 'path'

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '/',
  pwa: {
    themeColor: '#0C151D',
    name: 'Lucas Neri',
    manifestOptions: {
      name: 'Lucas Neri',
      short_name: "Lucas Neri",
      start_url: ".",
      display: 'standalone',
      theme_color: '#0C151D'
    }
  },
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {  
    resolve: {  
      alias: {  
        '@assets': path.resolve(__dirname, 'assets'),
        '@config': path.resolve(__dirname, 'src/config'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@constants': path.resolve(__dirname, 'src/constants'),
        '@views': path.resolve(__dirname, 'src/views'),
        '@store': path.resolve(__dirname, 'src/store'),
        '@util': path.resolve(__dirname, 'src/util'),  
        '@locales': path.resolve(__dirname, 'src/locales'),  
      }
    }
  }
}