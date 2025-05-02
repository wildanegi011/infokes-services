import Elysia from "elysia";
import { successResponse } from "../../base/base_response";
import { FolderItemUsecase } from "./usecase";
import { FolderItemRepository } from "./repository";
import { CreateFolderItemDto } from "./dto";

const usecase = new FolderItemUsecase(new FolderItemRepository());

export const folderItemRoutes = new Elysia({ prefix: "/folder" })
  .get("", async () => {
    const response = await usecase.getAllFolderItems();
    return successResponse(response);
  })
  .post("", async (req) => {
    const data = CreateFolderItemDto.parse(req.body);
    const response = await usecase.createFolderItem(data);
    return successResponse(response);
  })
  .delete("/:id", async ({ params }) => {
    const id = Number(params.id);
    await usecase.deleteFolderItem(id);
    return { deleted: "ok" };
  });
