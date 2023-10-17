import bcrypt from "bcrypt";
import handleError from "../utils/handleError";
import PostUser from "../types/api/notes/postUser";
import CommonResponse from "../types/commonResponse.type";
import { countUsers, createUser } from "../data/controllers/userControllers";

export const postUser = async ({ body }: PostUser, res: CommonResponse) => {
  try {
    const { username, name, password } = body;
    if ((await countUsers({ username })) > 0) return handleError(res, "Username already exists.", 409);

    const user = await createUser({
      name,
      username,
      password: await bcrypt.hash(password, 10),
    });

    res.send({ userId: user._id.toString() });
  } catch (e) {
    handleError(res, e);
  }
};
