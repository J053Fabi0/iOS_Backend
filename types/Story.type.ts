import Act from "./Act.type";
import StoryBrief from "./StoryBrief.type";

export default interface Story extends StoryBrief {
  acts: Act[];
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}
