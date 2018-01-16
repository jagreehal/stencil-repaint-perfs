exports.config = {
  namespace: 'stencilrepaintperfs',
  generateDistribution: true,
  bundles: [{ components: ['db-mon'] }]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
