import Joi from "joi";
import { a } from "./schemaUtils";

const password = Joi.string().min(8);
const username = Joi.string()
  .lowercase()
  .min(5)
  .max(32)
  .regex(/^(?!.*__)[a-z][a-z0-9_]*[a-z0-9]$/);
const name = Joi.string().min(1).max(30).trim();

export const postUser = a(
  Joi.object({
    password: password.required(),
    username: username.required(),
    name: name.default(Joi.ref("username")),
  }),
  "body"
);
