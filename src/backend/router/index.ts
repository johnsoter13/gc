import * as trpc from '@trpc/server';
import {prisma} from '@/backend/utils/prisma';

import { z } from 'zod';
import { sanitizeGCInput } from '../utils/sanitize';

export const appRouter = trpc.router().mutation('add-new-gc', {
  input: z
    .object({
      golfCourseName: z.string(),
      golfCourseRating: z.string(),
      golfCourseSlope: z.string(),
      golfCourseYards: z.string(),
      golfCourseParScore: z.string(),
      golfCourseHandicap: z.string()
    }),
  async resolve({ input }) {
    const formattedGCInput = sanitizeGCInput(input);
    const gc = await prisma.golfCourse.create({
      data: {
        ...formattedGCInput,
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

