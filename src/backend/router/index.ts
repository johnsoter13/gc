import * as trpc from '@trpc/server';
import prisma from '@/backend/utils/prisma';

import { z, ZodError } from 'zod';

export const appRouter = trpc.router().mutation('add-new-gc', {
  input: z
    .object({
      golfCourseName: z.string(),
      golfCourseRating: z.string(),
      golfCourseSlope: z.string(),
      golfCourseYards: z.string(),
      golfCourseParScore: z.string(),
      golfCourseTeeBox: z.string(),
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
}).mutation('add-golfer', {
  input: z
    .object({
      golferName: z.string(),
    }),
  async resolve({ input }) {
    const golfer = await prisma.golfer.create({
      data: {
        ...input
      }
    })

    return {
      golfer,
      success: true,
    }
  }
}).mutation('add-golf-round', {
  input: z
    .object({
      golferId: z.string(),
      golfCourseId: z.string(),
      score: z.string(),
      fairwaysHitFraction: z.string(),
      greensInRegulationFraction: z.string(),
      putts: z.string()
    }),
  async resolve({ input }) {
    const golfRound = await prisma.golfRound.create({
      data: {
        ...input
      }
    })
    return {
      golfRound,
      success: true,
    }
  }
}).query("get-golf-courses", {
  async resolve() {
    const golfCourses = await prisma.golfCourse.findMany({
      select: {
        golfCourseId: true,
        golfCourseName: true,
        golfCourseRating: true,
        golfCourseSlope: true,
        golfCourseYards: true,
        golfCourseParScore: true,
        golfCourseTeeBox: true,
      }
    });
 
    return { success: true, golfCourses };
  },
}).query("get-golfers", {
  async resolve() {
    const golfers = await prisma.golfer.findMany({
      select: {
        golferId: true,
        golferName: true,
      },
    });

    return { success: true, golfers };
  },
}).query("get-golf-rounds", {
  async resolve() {
    const golfRounds = await prisma.golfRound.findMany({
      include: {
        // score: true,
        // createdAt: true,
        // golferId: true,
        // golfCourseId: true,
        // golfRoundId: true,
        golfer: true,
        golfCourse: true,
      },
      orderBy: [
        {
          createdAt: 'desc',
        },
      ],
    });

    return { success: true, golfRounds };
  },
}).formatError(({shape, error}) => {
  return {
    ...shape,
    data: {
      status: false,
      ...shape.data,
      zodError:
        error.cause instanceof ZodError
          ? error.cause.flatten()
          : null,
    }
  };
});

// export type definition of API
export type AppRouter = typeof appRouter;

