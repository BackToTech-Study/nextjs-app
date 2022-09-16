import { NextApiRequest, NextApiResponse } from "next";

export interface ApiRequest<BodyType = unknown, QueryType = unknown>
  extends NextApiRequest {
  query: QueryType;
  body: BodyType;
}

export type ApiResponse<T> = NextApiResponse<ApiPayload<T>>;

export type ApiPayload<T> = T & {
  status: Boolean;
  error?: any;
};
