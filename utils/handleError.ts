import CommonResponse from "../types/commonResponse.type";

export default function handleError(res: CommonResponse, err: any, code = 400) {
  res.status(code).send({ message: null, error: err?.message || err });
}
