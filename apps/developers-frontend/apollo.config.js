// apollo.config.js
module.exports = {
  client: {
    service: {
      name: 'my-app',
      // URL to the GraphQL API
      url: 'http://localhost:3001/api/graphql'
    },
    // Files processed by the extension
    includes: ['./**/*.vue', './**/*.ts', './**/*.graphql']
  }
};
