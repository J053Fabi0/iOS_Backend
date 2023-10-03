import Joi from "joi";
import { a } from "./schemaUtils";

export const getMessages = a(Joi.object({ lastMessage: Joi.number().integer().min(-1).default(-1) }), "query");
