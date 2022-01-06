import * as trpc from '@trpc/server';
import {prisma} from '@/backend/utils/prisma';

import { z } from 'zod';

export const appRouter = trpc.router().mutation('add-new-gc', {
  input: z
    .object({
      golfCourseName: z.string(),
      golfCourseRating: z.number(),
      golfCourseSlope: z.number(),
      golfCourseYards: z.number(),
      golfCourseParScore: z.number(),
      golfCourseHandicap: z.number()
    }),
  async resolve({ input }) {
    const gc = await prisma.golfCourse.create({
      data: {
        ...input,
      }
    })
    return {
      gc,
      success: true,
    };
  },
});

// export type definition of API
export type AppRouter = typeof appRouter;

