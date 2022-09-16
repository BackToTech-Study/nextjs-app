import { Test } from "@prisma/client";
import { StatusCodes } from "http-status-codes";

import nc from "next-connect";
import prisma from "../../../lib/server/prisma";
import { ApiRequest, ApiResponse } from "../../../lib/server/types";

export type GetTestsResponsePayload = { tests: Test[] };

const getAll = async (
  req: ApiRequest,
  res: ApiResponse<GetTestsResponsePayload>
) => {
  const tests = await prisma.test.findMany();
  prisma.$disconnect();

  res.status(StatusCodes.OK).json({ status: true, tests });
};

export type CreateTestRequestPayload = Omit<Test, "id">;
export type CreateTestResponsePayload = { test: Test };

const create = async (
  req: ApiRequest<CreateTestRequestPayload>,
  res: ApiResponse<CreateTestResponsePayload>
) => {
  const test = await prisma.test.create({
    data: req.body,
  });

  res.status(StatusCodes.OK).json({ status: true, test });
};

export default nc().get(getAll).post(create);
