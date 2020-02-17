const config = require('../config.json');

module.exports = {
    title: config.title,
    description: config.description,
    themeConfig:{
        logo: config.logo,
        nav: config.navigation,
        sidebar: 'auto'
    }
}