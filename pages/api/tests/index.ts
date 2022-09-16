import { Test } from '@prisma/client';
import nc from 'next-connect';
import prisma from '../../../lib/server/prisma';
import { ApiRequest, ApiResponse } from '../../../lib/server/types';

export type GetTestsResponsePayload = {tests: Test[]};

const getAll = async (req: ApiRequest, res: ApiResponse<GetTestsResponsePayload>) => {
    const tests = await prisma.test.findMany();
    prisma.$disconnect();
    const result = { status: true, tests };
    res.status(200).json(result);
};

export type CreateTestRequestPayload = Omit<Test, "id">;
export type CreateTestResponsePayload = {test: Test};

const create = async (
    req: ApiRequest<CreateTestRequestPayload>, 
    res: ApiResponse<CreateTestResponsePayload>) => 
    {
        const test = await prisma.test.create({ data: req.body });
        res.status(200).json({ status: true, test });
    };

export default nc().get(getAll).post(create);