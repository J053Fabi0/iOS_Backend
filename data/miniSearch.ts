import MiniSearch from "minisearch";

const miniSearch = new MiniSearch({
  fields: ["title"], // fields to index for full-text search
  searchOptions: {
    fuzzy: 0.2,
    prefix: true,
  },
});

export default miniSearch;
