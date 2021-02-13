module.exports = {
  eleventyComputed: {
    permalink: (data) => {
      return `/pets/${data.urlpart}/{{page.fileSlug}}/index.html`;
    },
  },
};