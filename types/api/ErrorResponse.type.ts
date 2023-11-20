export enum ErrorType {
  /** 400 */
  BAD_REQUEST = "BAD_REQUEST",
  /** 401 */
  UNAUTHORIZED = "UNAUTHORIZED",
  /** 403 */
  FORBIDDEN = "FORBIDDEN",
  /** 404 */
  NOT_FOUND = "NOT_FOUND",
  /** 409 */
  CONFLICT = "CONFLICT",
  /** 500 */
  INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
  /** 503 */
  SERVICE_UNAVAILABLE = "SERVICE_UNAVAILABLE",
}

export const enum ErrorCode {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  INTERNAL_SERVER_ERROR = 500,
  SERVICE_UNAVAILABLE = 503,
}

export default interface ErrorResponse {
  code: ErrorCode;
  error: {
    type: ErrorType;
    title: string;
    detail?: string;
    instance?: string;
    extensions?: {
      preferences: {
        allowEditing: boolean;
      };
    };
  };
}
