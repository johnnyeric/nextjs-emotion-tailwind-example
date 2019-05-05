const withCSS = require('@zeit/next-css');
const path = require('path');

module.exports = withCSS({
    webpack: (config, options) => {
        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: 'empty'
        };
        
        return config;
    }
});
