import jwt from "jsonwebtoken";
import { NextFunction } from "express";
import handleError from "../utils/handleError";
import CommonRequest from "../types/commonRequest.type";
import CommonResponse from "../types/commonResponse.type";
import { countUsers, getUser } from "../data/controllers/userControllers";

/** @param permitIfNoUsers If there are no users, it will permit anyone. */
export const authJWT =
  (permitIfNoUsers: boolean) => async (req: CommonRequest, res: CommonResponse, next: NextFunction) => {
    // If there are no users, auth is not required
    if (permitIfNoUsers && (await countUsers()) === 0) return next();

    const { authorization } = req.headers;
    jwt.verify(
      authorization || "",

      process.env.API_SECRET as string, //

      async (error, decode) => {
        // Errors on decode will be ignored if testing
        if (error) return handleError(res, "Invalid JWT token", 403);

        // The personID will be the id of the payload, or, if testing, the parsedInt of the authorization string
        const userId: string = (decode as jwt.JwtPayload).id;
        const user = await getUser({ _id: userId });

        if (!user) return handleError(res, "User not found", 404);
        if (!user.enabled) return handleError(res, "User disabled", 401);

        req.authPerson = user;

        next();
      }
    );
  };

/** If there are no users, it will permit anyone. */
export const authIfNoUsers = authJWT(true);

/** Only allow authenticated users. */
export const auth = authJWT(false);
