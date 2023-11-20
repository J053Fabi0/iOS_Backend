import Joi from "joi";
import { a } from "./schemaUtils";

export const getStories = a(Joi.object({}), "query");

export const getSearchStories = a(
  Joi.object({
    query: Joi.string().required(),
  }),
  "query"
);
