module.exports = function (eleventyConfig) {

  // Pass through static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");

  // Filter: category display label
  eleventyConfig.addFilter("categoryLabel", (cat) => ({
    festival:  "Four Chord Music Fest",
    live:      "Live Music",
    events:    "Underground Events",
    lifestyle: "Fringe Lifestyle",
  }[cat] || cat));

  // Filter: format year or date string
  eleventyConfig.addFilter("year", (str) => String(str).slice(0, 4));

  // Filter: group shoots by eventSlug
  eleventyConfig.addFilter("groupByEvent", (shoots) => {
    const map = {};
    for (const s of shoots) {
      const key = s.eventSlug || s.slug;
      if (!map[key]) map[key] = { event: s.event, eventSlug: key, year: s.year, category: s.category, shoots: [] };
      map[key].shoots.push(s);
    }
    return Object.values(map).sort((a, b) => b.year - a.year);
  });

  return {
    dir: {
      input:    "src",
      output:   "_site",
      layouts:  "_layouts",
      includes: "_includes",
      data:     "_data",
    },
    templateFormats:     ["njk", "html", "md"],
    htmlTemplateEngine:  "njk",
    markdownTemplateEngine: "njk",
  };
};
