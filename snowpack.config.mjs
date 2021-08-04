/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: { url: '/', static: true},
    src: { url: '/dist'},
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    {
      match: "routes", 
      src: ".*", 
      dest: "/index.html"
    },
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true,
  },
  buildServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true,
  }
};
