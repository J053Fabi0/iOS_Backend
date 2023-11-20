import Story from "../../Story.type";
import CommonRequest from "../../commonRequest.type";
import CommonResponse from "../../commonResponse.type";

export default interface GetStory extends CommonRequest<null, { id: string }> {}

export type GetStoryResponse = CommonResponse<{
  /**
   * A list of stories found as a result of the search terms provided in the query.
   * Each item in the array is represented by a _"storyBrief"_ object.
   */
  story: Story;
}>;
