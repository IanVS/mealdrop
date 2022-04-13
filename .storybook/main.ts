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
  webpackFinal: (config) => {
    // Preset CRA does not take these into consideration, gotta do it manually
    return {
      ...config,
      cache: {
        type: 'filesystem',
      },
      experiments: {
        lazyCompilation: {
          entries: false,
        },
      },
    }
  },
  features: {
    storyStoreV7: true,
    buildStoriesJson: true,
    interactionsDebugger: true,
  },
  framework: '@storybook/react',
  core: {
    builder: {
      name: 'webpack5',
      // don't work in this project, due to CRA
      options: {
        lazyCompilation: true,
        fsCache: true,
      },
    },
  },
}
