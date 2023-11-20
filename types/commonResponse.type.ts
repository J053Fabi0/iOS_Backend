import { Response } from "express";
import ErrorResponse from "./api/ErrorResponse.type";

type CommonResponse<ResBody = any> = Response<ResBody | ErrorResponse, Record<string, any>>;

export default CommonResponse;
