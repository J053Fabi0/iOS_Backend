import { StoryBrief } from "../../StoryBrief.type";
import CommonRequest from "../../commonRequest.type";
import CommonResponse from "../../commonResponse.type";

export default interface GetStories extends CommonRequest<null, {}> {}

export type GetStoriesResponse = CommonResponse<{
  feed: StoryBrief[];
}>;
