const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'storybook-builder-vite',
  },
  async viteFinal(config, { configType }) {
    const customConfig = {
      resolve: {
        alias: {
          '~': path.resolve('src'),
        },
      },
    }

    return { ...config, ...customConfig }
  },
}
