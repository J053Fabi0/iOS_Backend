import { Response } from "express";

type CommonResponse<ResBody = any> = Response<ResBody, Record<string, any>>;

export default CommonResponse;
