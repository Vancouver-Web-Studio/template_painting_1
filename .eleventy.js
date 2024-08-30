module.exports = function (config) {



  config.addPassthroughCopy("./src/css");
  config.addPassthroughCopy("./assets");
  config.addPassthroughCopy("./src/scripts");
  config.addPassthroughCopy("./src/admin");



  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
