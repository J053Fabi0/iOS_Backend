import StoryBrief from "../../StoryBrief.type";
import CommonRequest from "../../commonRequest.type";
import CommonResponse from "../../commonResponse.type";

export default interface GetSearchStories extends CommonRequest<null, { query: string }> {}

export type GetSearchStoriesResponse = CommonResponse<{
  /**
   * A list of stories found as a result of the search terms provided in the query.
   * Each item in the array is represented by a _"storyBrief"_ object.
   */
  results: StoryBrief[];
  /** The total number of results based on the search terms provided. */
  count: number;
}>;
