import { z } from "zod";
export const CreateFolderItemDto = z.object({
  name: z.string(),
  type: z.enum(["folder", "file"]),
  parentId: z.number().optional().nullable(),
});

export type CreateFolderItemInput = z.infer<typeof CreateFolderItemDto>;
