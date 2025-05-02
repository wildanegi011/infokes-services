import { Elysia } from "elysia";
import { folderItemRoutes } from "./app/modules/folder_item/handler";
import { APP_URL } from "./constants";
import cors from "@elysiajs/cors";

new Elysia()
  .use(cors())
  .group("/api/v1", (app) => app.use(folderItemRoutes))
  .listen(3000, () => {
    console.log(`Server running on ${APP_URL}`);
  });
