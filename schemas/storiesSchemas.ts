import Joi from "joi";
import { a } from "./schemaUtils";

export const getStories = a(Joi.object({}), "query");
