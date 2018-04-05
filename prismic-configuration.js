module.exports = {

  apiEndpoint: 'https://tatari.prismic.io/api/v2',

  // -- Access token if the Master is not open
  accessToken: 'MC5XcjFMWnk0QUFPRkU4MDBV.77-9b2bvv70-Gmrvv71A77-977-977-9Ru-_ve-_ve-_vXrvv73vv73vv70J77-977-9Ae-_vSdEIO-_ve-_ve-_vUI',

  // OAuth
  // clientId: 'xxxxxx',
  // clientSecret: 'xxxxxx',

  // -- Links resolution rules
  // This function will be used to generate links to Prismic.io documents
  // As your project grows, you should update this function according to your routes
  linkResolver(doc, ctx) {
    if (doc.type === 'page') {
      return `/${doc.type}/${doc.uid}`;
    }

    return '/';
  },
};
