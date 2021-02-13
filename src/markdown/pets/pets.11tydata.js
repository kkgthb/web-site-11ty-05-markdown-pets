module.exports = {
  eleventyComputed: {
    documentData: (data) => {
      return data;
    },
    permalink: (data) => {
      return `/pets/${data.urlpart}/{{page.fileSlug}}/index.html`;
    },
  },
};