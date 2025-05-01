import Elysia from "elysia";
import { getFolderTree } from "./usecase";
import { successResponse } from "../base/base_response";

export const folderItemRoutes = new Elysia().get("/api/v1/folder", async () => {
  const response = await getFolderTree();
  return successResponse(response);
});
