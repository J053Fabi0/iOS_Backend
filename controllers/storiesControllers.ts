import handleError from "../utils/handleError";
import GetStories from "../types/api/stories/getStories";
import CommonResponse from "../types/commonResponse.type";

export const getStories = async (_: GetStories, res: CommonResponse) => {
  try {
    res.send({
      feed: [
        {
          id: "8a2618f1-809a-4d91-aca5-27c81b3d4116",
          title: "How did bitcoin crashed?",
          bookmarkID: "bf7f975a-4599-45ff-884f-2823630d6e6b",
          url: "https://news.google.com/",
          thumbnail: "https://aws.s3/73hfnod24.png/",
          isPublic: true,
        },
        {
          id: "8a2618f1-809a-4d91-aca5-27c81b3d4116",
          title: "Another interesting story!",
          bookmarkID: "bf7f975a-4599-45ff-884f-2823630d6e6b",
          url: "https://amazon.com/",
          thumbnail: "https://aws.s3/73hfnod24.png/",
          isPublic: true,
        },
      ],
    });
  } catch (e) {
    handleError(res, e);
  }
};
