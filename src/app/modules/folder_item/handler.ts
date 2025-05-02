import Elysia from "elysia";
import { successResponse } from "../../base/base_response";
import { FolderItemUsecase } from "./usecase";
import { CreateFolderItemDto } from "./dto";

export const createFolderItemRoutes = (usecase: FolderItemUsecase) =>
  new Elysia({ prefix: "/folder" })
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
