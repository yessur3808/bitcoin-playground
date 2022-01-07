// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
  
    // page.matchPath is a special key that's used for matching pages
    // only on the client.
    if (page.path.match(/^\/app/)) {
      page.matchPath = "/*"
  
      // Update the page.
      createPage(page)
    }
  }

  exports.onCreateWebpackConfig = ({ stage, loaders, actions, plugins }) => {
    

    if (stage === 'build-javascript' || stage === 'develop') {
      actions.setWebpackConfig({
          plugins: [plugins.provide({ Buffer: ['buffer/', 'Buffer'] })],
          resolve: {
            fallback: {
              stream: require.resolve('stream-browserify'),
            },
          },
      });
    }

  }