exports.config = {
  namespace: 'stencilrepaintperfs',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: false
    },
    {
      type: 'dist'
    }
  ],
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
