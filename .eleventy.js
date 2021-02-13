// Per 11ty from scratch, we have to have a module.exports definition
module.exports = (eleventyConfig) => {
  // See if this helps with things that do not refresh
  module.exports = function (eleventyConfig) {
    eleventyConfig.setUseGitIgnore(false);
  };

  // Make Liquid capable of rendering "partials"
  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
    strict_filters: true,
  });

  // Get proper data into .11tydata.json files
  eleventyConfig.setDataDeepMerge(true);

  // Add a "group objects by color" function to template languages
  eleventyConfig.addFilter(
    "groupByColor",
    require("./src/filters/group_by_color.js")
  );

  // Clarify which folder is for input and which folder is for output
  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
