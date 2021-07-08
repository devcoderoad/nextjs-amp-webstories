const isProduction = process.env.NODE_ENV !== 'development';
module.exports = {
  plugins: [
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
          grid: 'autoplace',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
        overrideBrowserslist: [
          'last 3 version',
          'Chrome >= 35',
          'Firefox >= 38',
          'Edge >= 10',
          'Explorer >= 10',
          'ie >= 10',
          'iOS >= 8',
          'Safari >= 8',
          'Android 2.3',
          'Android >= 4',
          'Opera >= 12',
        ],
      },
    ],
  ],
};
