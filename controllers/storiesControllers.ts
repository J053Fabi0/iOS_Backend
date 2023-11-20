import Jabber from "jabber";
import Story from "../types/Story.type";
import miniSearch from "../data/miniSearch";
import handleError from "../utils/handleError";
import randomNumber from "../utils/randomNumber";
import StoryBrief from "../types/StoryBrief.type";
import GetStory, { GetStoryResponse } from "../types/api/stories/getStory.type";
import GetStories, { GetStoriesResponse } from "../types/api/stories/getStories.type";
import GetSearchStories, { GetSearchStoriesResponse } from "../types/api/stories/getSearchStories.type";
import { ErrorCode, ErrorType } from "../types/api/ErrorResponse.type";

const jabber = new Jabber();

const dummy_stories: Story[] = [];
for (let i = 0; i < 100; i++)
  dummy_stories.push({
    id: `${i}`,
    isPublic: true,
    bookmarkID: `${i}`,
    url: "https://news.google.com/",
    thumbnail: "https://aws.s3/73hfnod24.png/",
    title: jabber.createParagraph(randomNumber(5, 8)),
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: Math.floor(i / 10).toString(),
    acts: Array.from({ length: 5 }).map((_, j) => ({
      id: `${i}_${j}`,
      image: "https://aws.s3/73hfnod24.png/",
      title: jabber.createParagraph(randomNumber(5, 8)),
      body: jabber.createParagraph(randomNumber(10, 30)),
    })),
  });
miniSearch.addAll(dummy_stories);

export const getStories = async (_: GetStories, res: GetStoriesResponse) => {
  try {
    const stories: StoryBrief[] = [];
    for (const { id, title, bookmarkID, url, isPublic, thumbnail } of dummy_stories)
      stories.push({ id, title, bookmarkID, url, isPublic, thumbnail });

    res.send({ feed: stories });
  } catch (e) {
    handleError(res, e);
  }
};

export const getSearchStories = async ({ query }: GetSearchStories, res: GetSearchStoriesResponse) => {
  try {
    const resultsIds = miniSearch.search(query.query);

    const results: StoryBrief[] = [];
    for (const { id } of resultsIds) {
      const result = dummy_stories.find((feed) => feed.id === id);
      if (result) {
        const { id, title, bookmarkID, url, isPublic, thumbnail } = result;
        results.push({ id, title, bookmarkID, url, isPublic, thumbnail });
      }
    }

    return res.send({ results, count: results.length });
  } catch (e) {
    handleError(res, e);
  }
};

export const getStory = async ({ query }: GetStory, res: GetStoryResponse) => {
  try {
    const { id } = query;

    const story = dummy_stories.find((story) => story.id === id);
    if (!story)
      return res.status(404).send({
        code: ErrorCode.NOT_FOUND,
        error: {
          type: ErrorType.NOT_FOUND,
          title: "Story not found.",
          detail: `Story with id ${id} not found.`,
        },
      });

    return res.send({ story });
  } catch (e) {
    handleError(res, e);
  }
};
