import Joi from "joi";
import { a } from "./schemaUtils";

export const getNote = a(Joi.object({ id: Joi.number().integer().min(-1).required() }), "query");
