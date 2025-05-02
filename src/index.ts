import { Elysia } from "elysia";
import { createFolderItemRoutes } from "./app/modules/folder_item/handler";
import { APP_URL } from "./constants";
import cors from "@elysiajs/cors";
import { FolderItemUsecase } from "./app/modules/folder_item/usecase";
import { FolderItemRepository } from "./app/modules/folder_item/repository";

new Elysia()
  .use(cors())
  .group("/api/v1", (app) =>
    app.use(
      createFolderItemRoutes(new FolderItemUsecase(new FolderItemRepository()))
    )
  )
  .listen(3000, () => {
    console.log(`Server running on ${APP_URL}`);
  });
