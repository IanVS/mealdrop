module.exports = {
  stories: [
    '../src/docs/Introduction.stories.mdx',
    '../src/docs/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-bench',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
    '@storybook/addon-a11y',
    'storybook-addon-designs',
    'storybook-mobile',
  ],
  staticDirs: ['../public'],
  babel: async (options) => ({
    ...options,
    plugins: [...options.plugins, 'babel-plugin-open-source'],
  }),

  features: {
    storyStoreV7: false,
    buildStoriesJson: true,
    interactionsDebugger: true,
  },
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config) {
    // Annoying way to add babel plugin,
    // until https://github.com/storybookjs/builder-vite/issues/286 is fixed
    config.plugins = [
      ...config.plugins.filter((plugin) => {
        return !(Array.isArray(plugin) && plugin[0].name === 'vite:react-babel')
      }),
      require('@vitejs/plugin-react')({
        exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
        babel: { plugins: ['babel-plugin-open-source'] },
      }),
    ]
    return config
  },
}
