import { AcademicSemester } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { AcademicSemesterFilterableFields } from './academicSemester.constants';
import { AcademicSemesterSevices } from './academicSemester.service';

const instertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicSemesterSevices.insertIntoDb(req.body);
  sendResponse<AcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester Created',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  console.log(req.query);
  const filters = pick(req.query, AcademicSemesterFilterableFields);

  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
  const result = await AcademicSemesterSevices.getAllFromDB(filters, options);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester fetched',
    meta: result.meta,
    data: result.data,
  });
});

export const AcademicSemesterController = {
  instertIntoDB,
  getAllFromDB,
};
