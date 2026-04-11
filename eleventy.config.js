import yaml from "js-yaml";

export default function (eleventyConfig) {
  // YAML data file support
  eleventyConfig.addDataExtension("yml", (contents) => yaml.load(contents));

  // Pass through static assets
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
  };
}
