const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
  const proxy = createProxyMiddleware({
    target: "https://api.anthropic.com",
    changeOrigin: true,
    pathRewrite: {
      '^/': '/'
    }
  });
  proxy(req, res, (err) => {
    if (err) res.status(500).send('代理错误');
  });
};
