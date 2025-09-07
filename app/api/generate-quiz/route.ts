import { questionSchema, questionsSchema } from "@/lib/schemas";
import { google } from "@ai-sdk/google";
import { streamObject } from "ai";

export const maxDuration = 60;

export async function POST(req: Request) {
  const { files } = await req.json();
  const firstFile = files[0].data;

  const result = streamObject({
    model: google("gemini-1.5-pro-latest"),
    messages: [
      {
        role: "system",
        content:
          "You are a medical educator. Your job is to take a medical document, and create a medical multiple choice test (with 20 questions) based on the content of the document. Focus on medical concepts, terminology, procedures, diagnoses, treatments, and clinical knowledge. Each option should be roughly equal in length and medically accurate.",
      },
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Create a medical multiple choice test with 20 questions based on this medical document. Focus on important medical concepts, procedures, terminology, and clinical knowledge presented in the document.",
          },
          {
            type: "file",
            data: firstFile,
            mimeType: "application/pdf",
          },
        ],
      },
    ],
    schema: questionSchema,
    output: "array",
    onFinish: ({ object }) => {
      const res = questionsSchema.safeParse(object);
      if (res.error) {
        throw new Error(res.error.errors.map((e) => e.message).join("\n"));
      }
    },
  });

  return result.toTextStreamResponse();
}
