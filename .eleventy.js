module.exports = function (eleventyConfig) {
  return {
    dir: {
      input: "src/dev/tukars/pages",
      output: "_site",
      includes: "../includes",
      layouts: "../layouts"
    }
  };
};