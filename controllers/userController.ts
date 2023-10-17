import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import handleError from "../utils/handleError";
import PostUser from "../types/api/notes/postUser";
import CommonResponse from "../types/commonResponse.type";
import { countUsers, createUser } from "../data/controllers/userControllers";

export const postUser = async ({ body }: PostUser, res: CommonResponse) => {
  try {
    const { username, name, password } = body;
    if ((await countUsers({ username })) > 0) return handleError(res, "Username already exists.", 409);

    await createUser({
      name,
      username,
      password: await bcrypt.hash(password, 10),
    });

    res.send({ authToken: jwt.sign({ username }, process.env.API_SECRET as string) });
  } catch (e) {
    handleError(res, e);
  }
};
