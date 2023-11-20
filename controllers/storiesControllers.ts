import Jabber from "jabber";
import miniSearch from "../data/miniSearch";
import handleError from "../utils/handleError";
import randomNumber from "../utils/randomNumber";
import { StoryBrief } from "../types/StoryBrief.type";
import GetStories, { GetStoriesResponse } from "../types/api/stories/getStories";
import GetSearchStories, { GetSearchStoriesResponse } from "../types/api/stories/getSearchStories";

const jabber = new Jabber();

const dummy_feeds: StoryBrief[] = [];
for (let i = 0; i < 100; i++)
  dummy_feeds.push({
    id: `${i}`,
    isPublic: true,
    bookmarkID: `${i}`,
    url: "https://news.google.com/",
    thumbnail: "https://aws.s3/73hfnod24.png/",
    title: jabber.createParagraph(randomNumber(5, 8)),
  });
miniSearch.addAll(dummy_feeds);

export const getStories = async (_: GetStories, res: GetStoriesResponse) => {
  try {
    res.send({ feed: dummy_feeds });
  } catch (e) {
    handleError(res, e);
  }
};

export const getSearchStories = async ({ query }: GetSearchStories, res: GetSearchStoriesResponse) => {
  try {
    const resultsIds = miniSearch.search(query.query);

    const results: StoryBrief[] = [];
    for (const { id } of resultsIds) {
      const result = dummy_feeds.find((feed) => feed.id === id);
      if (result) results.push(result);
    }

    return res.send({ results, count: results.length });
  } catch (e) {
    handleError(res, e);
  }
};
