"use server";

import { google } from "@ai-sdk/google";
import { generateObject } from "ai";
import { z } from "zod";

export const generateQuizTitle = async (file: string) => {
  const result = await generateObject({
    model: google("gemini-1.5-flash-latest"),
    schema: z.object({
      title: z
        .string()
        .describe(
          "A max four word title for the medical test based on the file provided as context",
        ),
    }),
    prompt:
      "Generate a title for a medical test based on the following medical PDF file name. Try and extract as much medical info from the file name as possible. Focus on medical topics, conditions, or specialties. If the file name is just numbers or incoherent, return 'Medical Test'.\n\n " + file,
  });
  return result.object.title;
};
