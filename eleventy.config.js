export default function(eleventyConfig) {
  // Copy all .js and .css files inside src/ to the output folder
  // 11ty maintains the subdirectory structure relative to the input folder
  eleventyConfig.addPassthroughCopy("src/**/*.js");
  eleventyConfig.addPassthroughCopy("src/**/*.css");

  return {
    dir: {
      input: "src",    // Source folder
      output: "_site"  // Compiled site folder
    }
  };
};