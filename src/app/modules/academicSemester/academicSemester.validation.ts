import { z } from 'zod';

const create = z.object({
  body: z.object({
    year: z.number({
      required_error: 'Year is required',
    }),
    title: z.string({
      required_error: 'Title is required',
    }),
    code: z.string({
      required_error: 'code is required',
    }),
    startMonth: z.string({
      required_error: 'start month is required',
    }),
    endMonth: z.string({
      required_error: 'end month is required',
    }),
  }),
});

export const AcademicSemesterValidation = {
  create,
};
